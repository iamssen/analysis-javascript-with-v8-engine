# V8 Engine을 사용한 JS 동작 분석

## 실행 방식

### 1. V8 Engine을 Build 해서 `d8` 명령어를 확보합니다. 

<https://www.notion.so/ssen/V8-Engine-d8-d2706acc3c1b44a397a005c11af48c22>

### 2. `bash ./create-snapshot.sh`를 실행해서 Snapshot을 만듭니다.

- `bash ./create-snapshot.sh ./hidden-class`와 같이 일부 디렉토리만 실행할 수 있습니다. 
- `d8 --allow-natives-syntax ./hidden-class/1.share-same-hidden-class.js`와 같이 개별 실행 가능합니다.
- `node snapshot-parser.js ./hidden-class/1.share-same-hidden-class/r.snap`과 같이 개별 Snapshot 파일을 Parsing 할 수 있습니다.

### 3. 동작을 확인할 File의 Snapshot을 확인합니다.

`*/r.snap.a`, `*/r.snap.b` 와 같은 Block 파일들은 Diff Tool을 사용해서 비교 분석하기 위한 용도 입니다.

```sh
code --diff ./hidden-class/1.share-same-hidden-class/r.snap.a ./hidden-class/1.share-same-hidden-class/r.snap.b
```

VSCode 에서는 위와 같이 실행할 수 있습니다. (`code` Command Line 설치 필요)

```sh
kdiff3 $(find ./hidden-class/2.create-new-hidden-class/r.snap.*)

# or

bash ./create-snapshot.sh ./hidden-class && kdiff3 $(find ./hidden-class/2.create-new-hidden-class/r.snap.*)
```

`kdiff3`를 설치한 경우 위와 같이 Block Snapshot들을 일괄 비교할 수 있습니다. (3개 파일까지 비교 가능)

```sh
webstorm diff $(find ./hidden-class/2.create-new-hidden-class/r.snap.*)

# or

bash ./create-snapshot.sh ./hidden-class && webstorm diff $(find ./hidden-class/2.create-new-hidden-class/r.snap.*)
```

IntelliJ, WebStorm 과 같은 JetBrains IDE를 사용하고 있다면 위와 같은 명령어로 내장된 Diff 기능을 사용할 수 있습니다. (3개 파일까지 비교 가능)
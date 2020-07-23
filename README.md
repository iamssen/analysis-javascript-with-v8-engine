# V8 Engine을 사용한 JS 동작 분석

## 실행 방식

### V8 Engine을 Build 해서 `d8` 명령어를 확보합니다. 

<https://www.notion.so/ssen/V8-Engine-d8-d2706acc3c1b44a397a005c11af48c22>

### `bash ./create-snapshot.sh`를 실행해서 Snapshot을 만듭니다.

- `d8 --allow-natives-syntax ./hidden-class/1.share-same-hidden-class.js`와 같이 개별 실행 가능합니다.
- `node snapshot-parser.js ./hidden-class/1.share-same-hidden-class.js.snap`과 같이 개별 Snapshot Parsing 할 수 있습니다.

### 동작을 확인할 File의 Snapshot을 확인합니다.

`*.js.snap.a`, `*.js.snap.b` 와 같은 Block 파일들은 Diff Tool을 사용해서 비교 분석하기 위한 용도 입니다.

```sh
code --diff ./hidden-class/1.share-same-hidden-class.js.snap.a ./hidden-class/1.share-same-hidden-class.js.snap.b
```

VSCode 에서는 위와 같이 실행할 수 있습니다.
# BoshiQ Judge

## これはなに

Local Area Network でジャッジしたい。

- まずはサーバーをコンテナ化しておこう。
- 将来的には NativeApp として BLE で P2P でジャッジを走らせたい。

## 技術スタック

- 言語：NodeJS(TS)
- DB: SQLite
- ORM: prisma
- BE: NestJS
- FE: NextJS

## Quick start

### Requirement

- node >= v16
- yarn

### とにかく始めたい

1. SQLite の migration

```
$ yarn migrate
```

2. 走らせる

```
$ yarn start
```

http://localhost:4200 で立ち上がります

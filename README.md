# Broccoli Module: Standard Document

## 更新履歴 - Change log

### tomk79/broccoli-module-std-document v0.2.1 (リリース日未定)

- メディアリストモジュールを追加。
- グリッドモジュールに、画面サイズ別の幅指定オプションを追加。
- フロートメディアモジュールのオプションのラベルを日本語表現に変更。
- カスタムフィールド `std-document-summernote-editor` を追加。
- 各モジュールのテンプレートを Twig形式に変更。

### tomk79/broccoli-module-std-document v0.2.0 (2020年5月10日)

- テキスト、画像、リンク、ボタン、表組み の基本モジュールが、常にブロック要素として配置されるように変更した。
- テキスト、画像、リンク、ボタン、表組み に、揃え位置のオプションを追加。
- テキスト、画像、リンク、ボタン、表組み に、前後の自然なマージンのオプションを追加。
- テキストモジュールに、文字サイズのオプションを追加。
- リンクモジュールで、標準ビュレットスタイルをデフォルトに設定した。
- いくつかのモジュールの内部コードを、Twigテンプレートに移行した。
- その他の細かい修正。

### tomk79/broccoli-module-std-document v0.1.5 (2020年4月4日)

- モジュールの上端に、わずかにスペースを開けるようにしたことで、上へのドロップがしやすくなった。
- 画像モジュールのターゲットウィンドウをセレクトボックスによる選択式に変更した。
- 見出しモジュールのショルダーコンテンツがレイアウトを崩すことがある問題を修正。
- `.px2-grid` で、カラムの下方向にもマージンがあくように修正。
- 新しいモジュール `:lists/ul-links`、 `:lists/ul-module` を追加。
- `:basics/a` のリンクスタイルの選択肢に、ボタン風スタイルを追加。

### tomk79/broccoli-module-std-document v0.1.4 (2020年3月14日)

- ボタンモジュール `.px2-btn` を追加。

### tomk79/broccoli-module-std-document v0.1.3 (2019年12月13日)

- ユーティリティ `.px2-font-size-ll`, `.px2-font-size-l`, `.px2-font-size-s`, `.px2-font-size-ss` を追加。
- `.px2-vertical-list` を追加。
- `.px2-horizontal-list` のオプション `.px2-horizontal-list--left`, `.px2-horizontal-list--center`, `.px2-horizontal-list--right` を追加。
- その他いくつかのスタイリング調整など。

### tomk79/broccoli-module-std-document v0.1.2 (2019年10月9日)

- `.px2-horizontal-list` で、 リストアイテムが多い場合に折り返すようになった。

### tomk79/broccoli-module-std-document v0.1.1 (2019年9月4日)

- `:basics/a` で、 ターゲットウィンドウを選択式に変更した。

### tomk79/broccoli-module-std-document v0.1.0 (2019年7月10日)

- 基本モジュールに リンク を追加。
- 一部モジュールのサムネイルとREADMEを更新。

### tomk79/broccoli-module-std-document v0.0.5 (2019年7月9日)

- 更新履歴モジュール(`:utils/changelog`) が普通の文字サイズになり、より汎用的に使えるようになった。
- `:utils/p` を ユーティリティブロック に改名。物理名は変更なし。
- 説明リスト `:lists/dl` を追加。

### tomk79/broccoli-module-std-document v0.0.4 (2019年6月11日)

- `:utils/p` で、前後のマージンの有無と、テキストの左右寄せを選択できるようになった。
- `:medias/float` のメディアレイアウトのパターンに、 Center と フルカラム を追加。
- 新しいカテゴリ `:headings` を追加。
- ブレイクポイントを見直し、小さい画面への対応が改善された。
- `:interactives` カテゴリを削除した。(`tomk79/broccoli-module-interact` へ分離移管)
- その他の細かい修正。

### tomk79/broccoli-module-std-document v0.0.3 (2019年4月8日)

- `:medias/image-media` を復活。 別のパッケージ `broccoli-module-medias` は、拡張モジュール集の1つと位置づけ、画像メディアは基本パッケージに含むことにする。

### tomk79/broccoli-module-std-document v0.0.2 (2019年3月12日)

- `:lists/index` を追加。
- `:medias/image-media` を削除。 別のパッケージ `broccoli-module-medias` に移管する。
- 一部 編集中画面レイアウトの改善。

### tomk79/broccoli-module-std-document v0.0.1 (2019年3月2日)

- Initial release.


## ライセンス - License

MIT License


## 作者 - Author

- Tomoya Koyanagi <tomk79@gmail.com>
- website: <https://www.pxt.jp/>
- Twitter: @tomk79 <https://twitter.com/tomk79/>

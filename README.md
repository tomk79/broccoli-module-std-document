# Broccoli Module: Standard Document

## 更新履歴 - Change log

### tomk79/broccoli-module-std-document v0.3.3 (リリース日未定)

- 画像モジュールを中央揃えに指定したときに、キャプションは左揃えのままにするようにした。
- 入力欄の並べ替えなどのUI改善。
- READMEの追加、修正、英訳。

### tomk79/broccoli-module-std-document v0.3.2 (2022年7月11日)

- コードブロックに影響するスタイルを削除した。
- その他の細かい修正。

### tomk79/broccoli-module-std-document v0.3.1 (2022年6月5日)

- 引用文モジュールを追加。
- `.px2-note`、 `.px2-error` を追加。

### tomk79/broccoli-module-std-document v0.3.0 (2022年5月2日)

- サポートするPHPのバージョンを `>=7.3.0` に変更。
- 見出しモジュールで、副見出しの改行に関する改善。
- リストモジュール、説明リストモジュール、グリッドモジュールのバリエーションを整理した。
- 画像モジュールに「キャプション」の入力欄を追加した。(HTML構造が変更されています。スタイルが崩れる場合は、HTMLの再生成をお試しください)
- 画像モジュールと画像メディアモジュールに、「拡大表示」オプションを追加した。
- フロートメディアモジュールの v2 を追加。見出しエリアを moduleフィールド に変更した。
- 一部モジュールの多言語対応。
- インタラクティブカテゴリを追加。
- ユーティリティブロックを高機能化した。
- ビューポート幅に合わせるユーティリティモジュールを追加。
- カスタムフィールド `std-document__css-margin-padding` を追加。
- その他の細かい修正。

### tomk79/broccoli-module-std-document v0.2.7 (2021年8月21日)

- `lists/index` が、レイアウトビュー上で横幅いっぱいに反応エリアが伸びるように改善した。
- `lists/changelog-v2` を追加し、`lists/changelog` は非推奨にした。見出しエリアと日付の入力方法が変更された。
- ボタンモジュールは、ユーティリティカテゴリに移した。
- ダウンロードボタンモジュールを追加した。

### tomk79/broccoli-module-std-document v0.2.6 (2021年7月10日)

- 見出しモジュールからショルダーメニューを削除した。(別名で作成し、従来の見出しモジュールは `deprecated` として残した)
- 画像モジュールに 画像の幅 欄を追加した。

### tomk79/broccoli-module-std-document v0.2.5 (2021年4月23日)

- `.px2-float-media` に、見出しエリアを追加した。このエリアは、スクリーン幅が狭いとき、画像メディアよりも先に表示される。

### tomk79/broccoli-module-std-document v0.2.4 (2021年4月10日)

- Broccoli v0.4 系で "リスト - List (ソースコード)" モジュールのリストスタイルオプションが無効になる不具合を修正。

### tomk79/broccoli-module-std-document v0.2.3 (2020年8月12日)

- グリッドモジュールに含まれていたサンプルのテキストを削除した。
- フロートメディアモジュールに含まれていたサンプルのダミー画像を削除した。
- 下層ページリストモジュールを追加。
- 説明リスト(モジュール挿入) を追加。
- 画像モジュールと画像メディアモジュールに、枠で囲うオプションを追加。
- スタイルガイドドキュメントを更新。
- その他の細かい修正。

### tomk79/broccoli-module-std-document v0.2.2 (2020年6月21日)

- 画像ファイル用の Dropped File Operator を追加。

### tomk79/broccoli-module-std-document v0.2.1 (2020年6月7日)

- メディアリストモジュールを追加。
- グリッドモジュールに、画面サイズ別の幅指定オプションを追加。
- フロートメディアモジュールのオプションのラベルを日本語表現に変更。
- リンクモジュールにディスプレイタイプオプションを追加。
- 各モジュールのテンプレートを Twig形式に移行。
- その他の細かい修正。

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

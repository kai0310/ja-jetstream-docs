# インストール

[[toc]]

## Jetstream のインストール

Composer を用いて, Jetstream を新しい Laravel のプロジェクトにインストールすることができます:

```bash
composer require laravel/jetstream
```

Composer を用いて Jetstream パッケージをインストールした後, 次の Artisan コマンド `jetstream:install` を実行することができます. このコマンドは, 希望するフロントエンドスタックの名前 (`livewire` or `inertia`)　を指定します. また, you may use the `--teams` switch to enable team support. 
The `jetstream:install` command will also install a suite of "feature" tests that provide test coverage for the features provided by Jetstream. 

**You are highly encouraged to read through the entire documentation of [Livewire](https://laravel-livewire.com) or [Inertia](https://inertiajs.com) before beginning your Jetstream project.**

:::danger 新しいアプリケーションのみ

Jetstream は, 新しい Laravel アプリケーションのみにインストールを行ってください. 既存の Laravel アプリケーションにインストールを行おうとすると, 予期せぬ動作や問題が発生します.
:::

#### Livewire を選択し, Jetstream をインストール

```bash
php artisan jetstream:install livewire

php artisan jetstream:install livewire --teams
```

#### Inertia を選択し, Jetstream をインストール

```bash
php artisan jetstream:install inertia

php artisan jetstream:install inertia --teams
```

### インストールの最後

Jetstream のインストールが完了したら, NPM の依存関係をインストール・構築し, データベースを migrate してください:

```bash
npm install
npm run dev
php artisan migrate
```

## アプリケーションのロゴ

Jetstream のインストールが終わると, Jetstream の認証ページやアプリケーションの上部のナビゲーションバーに Jetstream のロゴが使用されていることに気づくでしょう. このロゴは, Jetstream の2つのコンポーネントを変更することで簡単にカスタマイズできます。


### Livewire

フロントエンドスタックとして, Livewire を使用している場合は, まず Livewire の Blade コンポーネントを公開する必要があります:

```bash
php artisan vendor:publish --tag=jetstream-views
```

次に, 次の場所にある SVG をカスタマイズする必要があります. `resources/views/vendor/jetstream/components/application-logo.blade.php`, `resources/views/vendor/jetstream/components/authentication-card-logo.blade.php`, と `resources/views/vendor/jetstream/components/application-mark.blade.php` コンポーネントです.

### Inertia

フロントエンドスタックとして Inertia を使用している場合は, 次の場所にある SVG をカスタマイズしてください. `resources/js/Jetstream/AuthenticationCardLogo.vue`, `resources/js/Jetstream/ApplicationLogo.vue`, と `resources/js/Jetstream/ApplicationMark.vue`.

これらのコンポーネントをカスタマイズした後, assets を再構築する必要があります: 

```bash
npm run dev
```

# イントロダクション

[[toc]]

## このサイトについて

このサイトは, [Jetstreamの公式ドキュメント](https://github.com/laravel/jetstream-docs) から派生されたものであり, 非公式日本語 Jetstream ドキュメントという位置付けにあります。このドキュメントのことを公式ドキュメント呼ばないでください.

非公式として, このプロジェクトを行うことについて, [Mr. James Brooks](https://twitter.com/jbrooksuk) に快く許可をいただきました. ありがとうございます.

このドキュメントのメンテナー [@Kai](https://github.com/kai0310)

## Laravel Jetstream

Laravel Jetstream は美しくデザインされた Laravel 用のアプリケーションスターターキットであり, Laravel アプリケーションのための完璧な出発点を提供します. Jetstreamは, アプリケーションのログイン, 登録, メール認証, 二要素認証, セッション管理, Laravel Sanctum経由のAPIなどの機能を提供します.

Jetstream は [Tailwind CSS](https://tailwindcss.com)を用いてデザインされており, [Livewire](./stacks/livewire.md) か [Inertia](./stacks/inertia.md) の使用を選択することができます.


![Screenshot of Laravel Jetstream](./../assets/img/preview-2.png)

## 利用可能なフロントエンドスタック

Laravel Jetstream は, 2つのフロントエンドスタックを選択することができます:  [Livewire](https://laravel-livewire.com) と [Inertia.js](https://inertiajs.com) です. それぞれのフロントエンドスタックは, アプリケーションを構築する際に, 生産性が高く, 強力なアプリケーション構築の出発点を提供します. どのフロントエンドスタックを選択するかは, あなたのテンプレートの言語に好みによります。

### Livewire + Blade

[Laravel Livewire](https://laravel-livewire.com) is a library that makes it simple to build modern, reactive, dynamic interfaces using Laravel Blade as your templating language. This is a great stack to choose if you want to build an application that is dynamic and reactive but don't feel comfortable jumping into a full JavaScript framework like Vue.js.
[Laravel Livewire](https://laravel-livewire.com) は

When using Livewire, you may pick and choose which portions of your application will be a Livewire component, while the remainder of your application can be rendered as the traditional Blade templates you are used to.

:::tip Livewire Screencasts

初めて Livewire を使う場合は, [Livewire の ウェブサイトで公開されている スクリーンキャスト](https://laravel-livewire.com/screencasts/installation) をご覧ください。
:::

### Inertia + Vue

The [Inertia](https://inertiajs.com) stack provided by Jetstream uses [Vue.js](https://vuejs.org) as its templating language. Building an Inertia application is a lot like building a typical Vue application; however, you will use Laravel's router instead of Vue router. Inertia is a small library that allows you to render single-file Vue components from your Laravel backend by providing the name of the component and the data that should be hydrated into that component's "props".

In other words, this stack gives you the full power of Vue.js without the complexity of client-side routing. You get to use the standard Laravel routing and view data hydration approaches that you are used to.

Inertia スタックは, テンプレート言語として Vue.js を使うことに慣れ親しんでいる方に最適な選択肢です.



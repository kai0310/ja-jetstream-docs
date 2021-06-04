# アプリケーションを構築する

[[toc]]

## Introduction

Jetstream のインストールを終えた後, 実際にアプリケーションを構築するにはどのようにすればいいか疑問を持つかもしれません. ありがたいことに, Jetstreamでは, 初期の認証やアプリケーションのスキャフォールドとなる部分の設定をすべて行うので, すぐに始まることができます!

Jetstream をインストールすると, Jetstream のコードはあなたのものとなります. Jetstream のテンプレートはあなたのアプリケーションの中にあるため, 自由にカスタマイズすることができます. Jetstream は単なる出発点にすぎません. Jetstream のリリースは, You do not need to worry about keeping your user interface "compatible" with future Jetstream releases because each Jetstream release is simply an entirely new iteration of the starter kit.
言い換えれば, Jetstream は, 将来的に "アップデート" するものは, パッケージや管理用ダッシュボードではありません.
これは Laravel のスターターキットの足場となるものであり, インストールした後のテンプレートの維持管理はすべてあなたのものです。

:::tip Livewire & Inertia

Before diving into Jetstream, you should be familiar with how to use [Laravel Livewire](https://laravel-livewire.com) or [Inertia](https://inertiajs.com). Jetstream relies heavily on these technologies to provide a first-class user and developer experience.
:::

## Application Dashboard

After authenticating with your application, you will be redirected to the `/dashboard` route. This route is the home / dashboard screen of your application. When you are using the Livewire stack, this page is rendered by the `resources/views/dashboard.blade.php` Blade template. When using the Inertia stack, the screen is rendered using the `resources/js/Pages/Dashboard.vue` component.

If you open the dashboard template / component for your application, you will see that extends the application's primary "layout" component. This layout defines the overall look and feel of the interior of your application. When using Livewire, this layout is defined by the `resources/views/layouts/app.blade.php` template and rendered via the `App\View\Components\AppLayout` component class. When using Inertia, your application layout is defined by the `resources/js/Layouts/AppLayout.vue` component.

Once you have familiarized yourself with the dashboard and application layout templates, feel free to start editing them. For example, you will probably want to remove the "welcome" component that is rendered on your application dashboard. To do so, you may delete it from your dashboard template. Next, you're free to write the HTML needed to build your application. Remember, Jetstream uses the powerful Tailwind CSS framework, so be sure to learn more about Tailwind by consulting the [Tailwind documentation](https://tailwindcss.com/docs).

### Adding Additional Pages

By default, Jetstream's top navigation menu includes a link to the application dashboard. Of course, you are free to edit this navigation menu to add links to other pages that will be available within your application. When using Livewire, the navigation menu is defined by the `resources/views/navigation-menu.blade.php` Blade template. When using Inertia, the navigation menu is defined within the `resources/js/Layouts/AppLayout.vue` component.

## User Profile

When building a Jetstream application, it's likely that you will need to add your own forms and panels to the user profile management screen. By default, the user's profile screen contains panels to update the user's contact information, password, manage their two-factor authentication settings, and more. However, you're free to add your own additional panels to this page. To do so, you may simply edit the templates that define the page.

When using Livewire, the user's profile management screen is defined by the `resources/views/profile/show.blade.php` Blade template. When using Inertia, this screen is rendered by the `resources/js/Pages/Profile/Show.vue` component. To add additional panels or forms to the user profile, you may simply edit these templates as necessary for your application.

## Team Management

You may also need to add additional forms and panels to the team management screens rendered by Jetstream. These include the "team settings" screen for managing existing teams as well as the "create team" screen that is rendered when a user is creating a new team.

### Create Team Screen

When team support is enabled, Jetstream includes a screen that allows users to create new teams. You are free to add additional form fields to the form contained within this screen. Any additional form fields you add will be passed into Jetstream's `App\Actions\Jetstream\CreateTeam` action via the `$input` argument.

When using Livewire, the team creation screen is defined by the `resources/views/teams/create.blade.php` Blade template. When using Inertia, this screen is rendered by the `resources/js/Pages/Teams/Create.vue` component.

### Team Settings Screen

When team support is enabled, Jetstream includes a screen that allows users to manage the settings for their existing teams, such as changing the team name or inviting additional team members. You're free to add your own additional panels to these pages. To do so, you may simply edit the templates that define the page.

When using Livewire, the team settings screen is defined by the `resources/views/teams/show.blade.php` Blade template. When using Inertia, this screen is rendered by the `resources/js/Pages/Teams/Show.vue` component.

### Banner Alerts

Jetstream includes a notification banner which can be displayed at the top of your application's UI. If you are using the Livewire stack, you should ensure this notification banner has been published using the `vendor:publish` command:

```bash
php artisan vendor:publish --tag=jetstream-views
```

After publishing the Jetstream components, your application will contain the banner component at `vendor/components/banner.blade.php`. If you are using the Inertia stack, your banner component will be contained within the `Banner.vue` Vue component.

To instruct Jetstream to display the banner, you must flash a `flash.banner` message to the session. In addition to the banner message, you may also instruct Jetstream to display the banner with a `success` style or a `danger` style:

```php
$request->session()->flash('flash.banner', 'Yay it works!');
$request->session()->flash('flash.bannerStyle', 'success');

return $this->redirect('/');
```

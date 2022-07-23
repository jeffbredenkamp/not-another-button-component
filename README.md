
# Not another button component

A simple set of flat buttons written in SASS and HTML.


## Usage

#### Base

```html
<a href="#" class="btn" role="button">Default Button</a>
<a href="#" class="btn btn-primary" role="button">Primary Button</a>
<a href="#" class="btn btn-secondary" role="button">Secondary Button</a>
<a href="#" class="btn btn-outline" role="button">Outline Button</a>
<a href="#" class="btn btn-success" role="button">Success Button</a>
<a href="#" class="btn btn-warning" role="button">Warning Button</a>
<a href="#" class="btn btn-error" role="button">Error Button</a>
```

#### Size

```html
<a href="#" class="btn btn-primary small" role="button">Small Button</a>
<a href="#" class="btn btn-primary" role="button">Medium Button</a>
<a href="#" class="btn btn-primary large" role="button">Large Button</a>
```

#### Disabled

```html
<a href="#" class="btn disabled">Default</a>
<a href="#" class="btn btn-primary disabled" role="button" aria-disabled="true">Primary</a>
<a href="#" class="btn btn-secondary disabled" role="button" aria-disabled="true">Secondary</a>
<a href="#" class="btn btn-outline disabled" role="button" aria-disabled="true">Outline</a>
<a href="#" class="btn btn-success disabled" role="button" aria-disabled="true">Success</a>
<a href="#" class="btn btn-warning disabled" role="button" aria-disabled="true">Warning</a>
<a href="#" class="btn btn-error disabled" role="button" aria-disabled="true">Error</a>
```

#### Buttons with text and icon

```html
<a href="#" class="btn" role="button"><i class="fas fa-search"></i> Search</a>
<a href="#" class="btn" role="button"><i class="fas fa-inbox"></i> Inbox</a>
<a href="#" class="btn" role="button"><i class="fas fa-globe"></i> Language</a>
<a href="#" class="btn" role="button"><i class="fas fa-download"></i> Download</a>
<a href="#" class="btn" role="button"><i class="fas fa-question-circle"></i> Help</a>
```

#### Buttons icon only

```html
<a href="#" class="btn" role="button"><i class="fas fa-search"></i></a>
<a href="#" class="btn" role="button"><i class="fas fa-inbox"></i></a>
<a href="#" class="btn" role="button"><i class="fas fa-globe"></i></a>
<a href="#" class="btn" role="button"><i class="fas fa-download"></i></a>
<a href="#" class="btn" role="button"><i class="fas fa-question-circle"></i></a>
```

#### Horizontal button group

```html
<div class="btn-group btn-group-horizontal">
    <a href="#" class="btn" role="button">Cut</a>
    <a href="#" class="btn btn-outline" role="button">Copy</a>
    <a href="#" class="btn btn-outline" role="button">Paste</a>
    <a href="#" class="btn btn-outline" role="button">Delete</a>
</div>
```

#### Horizontal button group icons only

```html
<div class="btn-group btn-group-horizontal">
    <a href="#" class="btn" role="button"><i class="fas fa-cut"></i></a>
    <a href="#" class="btn btn-outline" role="button"><i class="fas fa-copy"></i></a>
    <a href="#" class="btn btn-outline" role="button"><i class="fas fa-paste"></i></a>
    <a href="#" class="btn btn-outline" role="button"><i class="fas fa-trash-alt"></i></a>
</div>
```

#### Vertical button group

```html
<div class="btn-group btn-group-vertical">
    <a href="#" class="btn" role="button">Pounds</a>
    <a href="#" class="btn btn-outline" role="button">Euro</a>
    <a href="#" class="btn btn-outline" role="button">Dollars</a>
</div>
```

#### Vertical button group icons only

```html
<div class="btn-group btn-group-vertical">
    <a href="#" class="btn" role="button"><i class="fas fa-pound-sign"></i></a>
    <a href="#" class="btn btn-outline" role="button"><i class="fas fa-euro-sign"></i></a>
    <a href="#" class="btn btn-outline" role="button"><i class="fas fa-dollar-sign"></i></a>
</div>
```

## License

The [MIT License](https://github.com/jeffbredenkamp/not-another-button-component/blob/main/LICENSE.md) (MIT)
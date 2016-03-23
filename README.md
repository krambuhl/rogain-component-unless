# rogain-component-unless

Returns it's children if `data` to `value` are __not__ equal. If the `<Else />` branch is defined, it will be returned when `data` and `value` are equal.

If `value` is not defined, `Unless` will have the same behavior as `Empty`.

```html
<Unless data={loggedIn} value="true"><LoginForm /></Unless>
```

__Attributes__

___data___

Variable or Expression.

___value___

Variable or Expression.  Optional.

## Install 

With [npm](https://www.npmjs.com) do:

```
npm install rogain-component-unless
```

## License

MIT
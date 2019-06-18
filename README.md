# webpack-css-loader-test

##

In a big project, styles files size always be huge. So we need to analyze style modules' sizes to find out which style part is big. For example, I use `webpack-bundle-analyser`. If I only use `css` and `css-loader`, everything works out fine. As the pic shows below, We can see `css.js` is made up of `a.css` and `b.css`.

But If I use `sass` and add `sass-loader`, I cannot see the relationship between style files, without detail information, only `index.sass`

![image](https://user-images.githubusercontent.com/14990734/59660804-038e4980-91dc-11e9-813f-cac7a1c2a965.png)

![image](https://user-images.githubusercontent.com/14990734/59662345-50bfea80-91df-11e9-8bd7-b65ed46a130f.png)

maybe webpack `Module Dependencies` explains why:
> https://webpack.js.org/contribute/writing-a-loader#module-dependencies

> In the case of the less-loader, it cannot transform each @import to a require because all .less files must be compiled in one pass for variables and mixin tracking. Therefore, the less-loader extends the less compiler with custom path resolving logic. It then takes advantage of the second approach, this.resolve, to resolve the dependency through webpack.

less-loader or sass-loader transform `@import` to `this.resolve` instead of `require`，maybe webpack can't work out the relationship between style files without `require`. 

But can we find out a way to solve this?

## script
npm run build

# last-version-boilerplate

THIS IS FOR PERSONAL USE RIGHT NOW - WORK IN PROGRESS

install boilerplate of your choice

```
curl -sSL https://raw.githubusercontent.com/martinratinaud/last-version-boilerplate/master/init.sh | sh -s node react-webpack && rm init.sh
```


If, just like me, you are tired of spending countless hours to get a boilerplate that actually is what you need, with no extra stuff and with no outdated dependencies, **you've come to the right place**

## the idea

What I want when I start a new project is a way to have a simple working project with all latest dependencies which is not something very common on github I find.

I understand that sometimes, versions are not compatible but I do not really care, shit happens and I can correct it.

## existing boilerplates

### node

[react-webpack](./node/react-webpack)


## contribute

You're on the same page ! great ! make a PR with your favorite boilerplate inside a well-named folder and with an install script so that anyone can install it using

`curl -O https://raw.githubusercontent.com/martinratinaud/last-version-boilerplate/master/init.sh && chmod 775 init.sh && ./init.sh node react-webpack && rm init.sh`

Thanks

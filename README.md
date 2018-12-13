# gatsby-remark-twitch

Embed Twitch videos/clips/channels in Gatsby markdown

## Install

```bash
npm install --save @weknow/gatsby-remark-twitch
```

## How to use

```js
// In your gatsby-config.js
plugins: [
  {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: [
        {
          resolve:"@weknow/gatsby-remark-twitch",
          options: {
            width: 800,
            height: 400
          }
        }
      ]
    }
  }
];
```

## Usage

```markdown
# Blog post title

This is an example of embedding twitch media.
Add any markdown as you normally do, and then insert a valid
twitch link anywhere to automatically transform it into an embed

#### Twitch video

https://www.twitch.tv/videos/347319713

#### Twitch clip

https://www.twitch.tv/xisuma/clip/MagnificentOilyUdonTTours

#### Twitch channel

https://www.twitch.tv/xisuma


```

> __NOTE:__ Make sure to copy the link instead of embed code.

## How this looks like

<p align="center"><img src="https://i.imgur.com/h1dfPtk.jpg" alt="" /></p>

[View a live demo here](https://remarktwitch.netlify.com/)

## License

MIT

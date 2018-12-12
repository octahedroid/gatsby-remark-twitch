# gatsby-remark-twitter

Embed Twitch videos, clips or channels in your Gatsby!

### [View a live demo here](https://remarktwitch.netlify.com/)

## Install

1. Install plugin to your site:

```bash
yarn add gatsby-remark-twitch
```

2. Add `gatsby-remark-twitch` to your `gatsby-transformer-remark` plugins in `gatsby-config.js`:

```js
plugins: [
  {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: [
        {
          resolve:"gatsby-remark-twitch",
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

3. Restart gastby.

## Usage

```markdown
## My blog post

This is an example of embedding a single tweet card.
Just type your markdown as you normally do, and then insert a valid
tweet link anywhere to automatically transform it into an embed!

#### Twitch video

https://www.twitch.tv/videos/347319713

#### Twitch clip

https://www.twitch.tv/xisuma/clip/MagnificentOilyUdonTTours

#### Twitch channel

https://www.twitch.tv/xisuma


```

> __NOTE:__ Make sure to copy the link instead of embed code.

<p align="center"><img src="https://i.imgur.com/h1dfPtk.jpg" alt="" /></p>

## Configuration

```js
plugins: [
  {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: [
        "gatsby-remark-twitter",
      ]
    }
  }
];
```

## License

MIT
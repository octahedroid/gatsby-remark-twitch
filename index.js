

const visit = require('unist-util-visit');

module.exports = async ({ markdownAST }, options = { width: 600, height: 300 }) => {
  visit(markdownAST, 'text', async (node) => {
    const { value } = node;
    const twitchVideo = value.match(/https:\/\/(www\.)?twitch\.tv\/(videos\/[A-Za-z0-9-_?=]*)/gi);
    const twitchClip = value.match(/https:\/\/(www\.)?twitch\.tv\/([A-Za-z0-9-_?=]*\/clip\/[A-Za-z0-9-_?=]*)/gi);
    const twitchChannel = value.match(/https:\/\/(www\.)?twitch\.tv\/([A-Za-z0-9-_?=]*)$/gi);

    if (twitchVideo) {
      const videoId = (value.split('/')).pop();
      console.log(`\n Embeding video: ${twitchVideo} ${videoId} \n`);
      node.type = 'html';
      node.value = `<div><iframe
        src="https://player.twitch.tv/?video=${videoId}&autoplay=false"
        height="${options.height}"
        width="${options.width}"
        frameborder="0"
        scrolling="no"
        allowfullscreen="true">
      </iframe></div>`;
    }

    if (twitchClip) {
      const clipId = (value.split('/')).pop();
      console.log(`\n Embeding clip: ${twitchClip} ${clipId} \n`);
      node.type = 'html';
      node.value = `<div><iframe
        src="https://clips.twitch.tv/embed?clip=${clipId}&autoplay=false"
        height="${options.height}"
        width="${options.width}"
        frameborder="0"
        scrolling="no"
        allowfullscreen="true">
      </iframe></div>`;
    }
    if (twitchChannel) {
      const channelName = (value.split('/')).pop();
      console.log(`\n Embeding channel: ${twitchChannel} ${channelName} \n`);
      node.type = 'html';
      node.value = `<div><iframe
        src="https://player.twitch.tv/?channel=${channelName}&muted=false"
        height="${options.height}"
        width="${options.width}"
        frameborder="0"
        scrolling="no"
        allowfullscreen="true">
      </iframe></div>`;
    }
  });

  return markdownAST;
};

module.exports = async ({ inter, queue }) => {
  if (!queue || !queue.playing) return inter.reply({ content: `NÃ£o tem musica tocando filho da puta burro... tentar de novo ? ð´â`, ephemeral: true });

  const success = queue.skip();

  return inter.reply({ content: success ? `Musica atual ${queue.current.title} skipada â` : `Something went wrong ${inter.member}... try again ? â`, ephemeral: true });
}
module.exports = async ({ inter, queue }) => {
  if (!queue || !queue.playing) return inter.reply({ content: `Não tem musica tocando filho da puta burro... tentar de novo ? 🔴❌`, ephemeral: true });

  const success = queue.skip();

  return inter.reply({ content: success ? `Musica atual ${queue.current.title} skipada ✅` : `Something went wrong ${inter.member}... try again ? ❌`, ephemeral: true });
}
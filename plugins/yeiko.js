const handler = async (m, {conn}) => {
  m.reply(global.yeijoinsano);
};
handler.command = /^(yeikoinsa|yeikoinsano)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.yeikoinsano = `
SOY YEIKO EL MAS INSANO Y GHOSS ME LA PELA X10
`;

export const urlRegex = /^(https?:\/\/)?(www\.)?nbatopshot.com\/listings\/p2p\/[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}\+[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$/;

export const getPlayIdFromUrl = (url: string) => {
  if (urlRegex.test(url)) {
    const tokens = url.split('/');
    return tokens[tokens.length - 1].split('+')[0];
  }

  return null;
};

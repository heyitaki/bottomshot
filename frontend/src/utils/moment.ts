export const urlRegex = /^(https?:\/\/)?(www\.)?nbatopshot.com\/listings\/p2p\/[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}\+[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$/;

export const parseIdsFromUrl = (url: string) => {
  if (urlRegex.test(url)) {
    const tokens = url.split('/');
    const ids = tokens[tokens.length - 1].split('+');
    return { setId: ids[0], playId: ids[1] };
  }

  return {};
};

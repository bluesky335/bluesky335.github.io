import i18n from '@/i18n';
import axios from 'axios';

async function getAppStoreAppInfoFromUrl(url: string) {
  const result = await axios.get(url);
  if (result.status === 200) {
    return result.data;
  } else {
    throw new Error(result.data);
  }
}

export async function getAppStoreAppInfo(id: string) {
  if (/\d+/.test(id)) {
    return await getAppStoreAppInfoFromUrl(
      `https://itunes.apple.com/lookup?id=${id}`,
    );
  } else {
    throw new Error('Invalid app ID');
  }
}

export async function getAppListForDeveloper(name: string): Promise<any> {
  const str = encodeURI(name);
  const lang = i18n.global.locale.value.toLocaleLowerCase();
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');

    const callBackFuncName = `callBack${Math.ceil(
      Math.random() * 100000,
    )}_${Date.parse(Date())}`;
    script.src = `https://itunes.apple.com/search?term=${str}&media=software&lang=${lang}&callback=${callBackFuncName}`;
    (window as any)[callBackFuncName] = function (data: any) {
      if (data) {
        resolve(data);
      } else {
        reject(new Error('Get app list failed'));
      }
      script.remove();
      (window as any)[callBackFuncName] = undefined;
    };
    document.body.appendChild(script);
  });
}

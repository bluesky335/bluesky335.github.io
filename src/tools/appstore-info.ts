import i18n from '@/i18n';

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

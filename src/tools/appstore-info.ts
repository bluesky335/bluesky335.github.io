import i18n from '@/i18n';

export interface AppStoreApp {
  trackId: number;
  trackName: string;
  trackViewUrl: string;
  artworkUrl512: string;
  contentAdvisoryRating: string;
  version: string;
  description: string;
}

export interface AppStoreSearchResult {
  resultCount: number;
  results: AppStoreApp[];
}

type ItunesCallback = (data: AppStoreSearchResult | null) => void;

export async function getAppListForDeveloper(
  name: string,
): Promise<AppStoreSearchResult> {
  const str = encodeURI(name);
  const lang = i18n.global.locale.value.toLocaleLowerCase();
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');

    const callBackFuncName = `callBack${Math.ceil(
      Math.random() * 100000,
    )}_${Date.parse(Date())}`;
    script.src = `https://itunes.apple.com/search?term=${str}&media=software&lang=${lang}&callback=${callBackFuncName}`;
    const callbackHolder = window as unknown as Record<
      string,
      ItunesCallback | undefined
    >;
    callbackHolder[callBackFuncName] = function (data) {
      if (data) {
        resolve(data);
      } else {
        reject(new Error('Get app list failed'));
      }
      script.remove();
      callbackHolder[callBackFuncName] = undefined;
    };
    document.body.appendChild(script);
  });
}

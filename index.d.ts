/*
 * @Author: Bin
 * @Date: 2021-07-29
 * @FilePath: /react-native-qq-lib/index.d.ts
 */

export type QQLibShareType = "news" | "text" | "image";

export interface QQLibSharePropTypes {
  type: QQLibShareType;
}

export interface QQLibShareNewsPropTypes extends QQLibSharePropTypes {
  title: string;
  description: string;
  webpageUrl: string;
  imageUrl: string;
}

export interface QQLibShareTextPropTypes extends QQLibSharePropTypes {
  text: string;
}

export interface QQLibShareImagePropTypes extends QQLibSharePropTypes {
  imageUrl: string;
  imageLocalUrl: string;
}

declare const login: (scopes?: string) => Promise<any>;
declare const shareToQQ: (
  data:
    | QQLibShareNewsPropTypes
    | QQLibShareTextPropTypes
    | QQLibShareImagePropTypes,
) => Promise<any>;
declare const shareToQzone: (
  data:
    | QQLibShareNewsPropTypes
    | QQLibShareTextPropTypes
    | QQLibShareImagePropTypes,
) => Promise<any>;
declare const logout: () => {};

export declare const init: () => void;

export { login, shareToQQ, shareToQzone, logout };

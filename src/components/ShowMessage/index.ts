import { h, render } from 'vue';
import ShowMessageView from './ShowMessageView.vue';

export default function ShowMessage(message: string) {
  const div = document.createElement('div');
  div.setAttribute('class', 'show-message-box');
  document.body.appendChild(div);
  const vnode = h(ShowMessageView, { message });
  render(vnode, div);
}

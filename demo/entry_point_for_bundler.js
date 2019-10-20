import {dfn} from 'brick-element'

import * as b from '../build/button'
customElements.define("button-x", b.buttonX);
dfn("delete-x", b.deleteX);

import * as t from '../build/titles'
dfn("title-x", t.titleX);
dfn("subtitle-x", t.subtitleX);

import * as bx  from '../build/box'
dfn('box-x',bx.boxX);
dfn('focus-box',bx.focusBox);
dfn('message-x',bx.messageX);

import * as m from '../build/menu'
dfn("menu-x", m.menuX)
dfn("drop-x",m.dropX);
dfn("smart-tag", m.smartTag);

import * as i from '../build/input'
dfn('input-x', i.inputX);
dfn('checkbox-x', i.checkboxX);

import * as n from '../build/navbar'
dfn('nav-x', n.navX );
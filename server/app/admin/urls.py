# -*- coding: utf-8 -*-
# @Time    : 2020/10/18 9:34 上午
# @Author  : xu.junpeng

from app.admin.views import Ping, CreateAccount, Login


def bind_urls(app):
    app.add_url_rule('/ping', view_func=Ping.as_view('ping'), methods=['GET'])
    app.add_url_rule(
        '/user/create', view_func=CreateAccount.as_view('create_account'), methods=['POST'])
    app.add_url_rule(
        '/user/login', view_func=Login.as_view('login'), methods=['POST'])
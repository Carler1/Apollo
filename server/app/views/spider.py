# -*- coding: utf-8 -*-
# @Time    : 2020/10/17 1:12 上午
# @Author  : xu.junpeng
# @File    : view

from app.base.baseview import BaseView
from app.base.status_code import Codes

from app.controllers import SpiderController
from app.utils.spider_utils.crawl_tieba import Crawl


class CreateSpiderTask(BaseView):
    def post(self):
        params = self.request.json
        url = params.get("url")
        desc = params.get("desc")
        headers = params.get("headers")
        start_page = params.get("start_page")
        end_page = params.get("end_page")
        if SpiderController.create_task(url, desc, headers, start_page, end_page):
            return self.formattingData(code=Codes.SUCCESS.code, msg='任务创建成功', data=None)
        # run task
        return self.formattingData(code=Codes.FAILE.code, msg='任务创建失败', data=None)


class SearchSpiderTask(BaseView):
    def post(self):
        params = self.request.json
        page = int(params.get("page", 1))
        offset = int(params.get("offset", 20))
        content = params.get("content")
        query = params.get("query", {})
        result, total_nums = SpiderController.search_task(page, offset, content, **query).values()
        if len(result) == 0:
            return self.formattingData(code=Codes.FAILE.code, msg='未查询到数据', data=None)
        for index, item in enumerate(result):
            result[index]["url"] = item["request_url"]
            del result[index]["request_url"]
        return self.formattingData(code=Codes.SUCCESS.code, msg='搜索完成', data={"data": result, "total_nums": total_nums})


class getSpiderTaskResult(BaseView):
    def post(self):
        params = self.request.json
        page = int(params.get("page", 1))
        offset = int(params.get("offset", 20))
        content = params.get("content")
        query = params.get("query", {})
        result, total_nums = SpiderController.search_task(page, offset, content, **query).values()
        if len(result) == 0:
            return self.formattingData(code=Codes.FAILE.code, msg='未查询到数据', data=None)
        for index, item in enumerate(result):
            result[index]["url"] = item["request_url"]
            del result[index]["request_url"]
        return self.formattingData(code=Codes.SUCCESS.code, msg='搜索完成', data={"data": result, "total_nums": total_nums})

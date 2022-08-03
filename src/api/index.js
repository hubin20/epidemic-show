import axios from "../utils/request";

const base = {
  baseUrl: "http://api.tianapi.com",
  baseUrl1: "https://api.muxiaoguo.cn/api/epidemic",
  ncov: "/ncov/index",
  ncovabroad: "/ncovabroad/index",
};

const api = {
  /**
   * 疫情数据
   */
  getNcov(params) {
    return axios.get(base.baseUrl + base.ncov, {
      params,
    });
  },
  /**
   * 省市疫情
   */
  getNcovCity(params) {
    return axios.get("api/epidemic", {
      params,
    });
  },
  /**
   * 世界疫情
   */
  getNcovAbroad(params) {
    return axios.get(base.baseUrl + base.ncovabroad,{
      params
    });
  },
};

export default api;

/***
 *  存放接口地址  统一配置管理
 * 
 * 
 * 
 */
// 获取接口地址的前缀
const prefix = process.env.VUE_APP_API_PREFIX
    // https://api.iynn.cn/film/api/v1/getComingSoonFilmList
const url = {
    // 正在热映
    'nowPlaying': prefix + '/getNowPlayingFilmList',
    // 即将上映
    'comingSoon': prefix + '/getComingSoonFilmList',
    'cinema': prefix + '/getCinemaList',
}

export default url
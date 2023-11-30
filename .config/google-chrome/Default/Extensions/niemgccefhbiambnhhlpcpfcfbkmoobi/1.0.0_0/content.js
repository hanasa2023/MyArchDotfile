// content.js

$(() => {
  let url = ['1', '2', '3', '4']
  let clone_url = ['https://github.com.cnpmjs.org', 'https://hub.fastgit.org', 'https://gitclone.com']
  const svg = [
    '<svg class="octicon octicon-file-zip mr-3" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3.5 1.75a.25.25 0 01.25-.25h3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h2.086a.25.25 0 01.177.073l2.914 2.914a.25.25 0 01.073.177v8.586a.25.25 0 01-.25.25h-.5a.75.75 0 000 1.5h.5A1.75 1.75 0 0014 13.25V4.664c0-.464-.184-.909-.513-1.237L10.573.513A1.75 1.75 0 009.336 0H3.75A1.75 1.75 0 002 1.75v11.5c0 .649.353 1.214.874 1.515a.75.75 0 10.752-1.298.25.25 0 01-.126-.217V1.75zM8.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM6 5.25a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5A.75.75 0 016 5.25zm2 1.5A.75.75 0 018.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 018 6.75zm-1.25.75a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM8 9.75A.75.75 0 018.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 018 9.75zm-.75.75a1.75 1.75 0 00-1.75 1.75v3c0 .414.336.75.75.75h2.5a.75.75 0 00.75-.75v-3a1.75 1.75 0 00-1.75-1.75h-.5zM7 12.25a.25.25 0 01.25-.25h.5a.25.25 0 01.25.25v2.25H7v-2.25z"></path></svg>',
    '<svg class="octicon octicon-clippy" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"></path></svg>',
    '<svg class="octicon octicon-cloud-download" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z"></path></svg>'
]
const download_url = [{
  url: 'https://download.fastgit.org',
  address: '东京'
}, {
  url: 'https://pd.zwc365.com/seturl',
  address: '香港01'
}, {
  url: 'https://git.yumenaka.net',
  address: '洛杉矶'
}, {
  url: 'https://g.ioiox.com',
  address: '香港02'
}, {
  url: 'https://gh.con.sh',
  address: '美国'
}, {
  url: 'https://gh.api.99988866.xyz',
  address: '美国'
}]
  function addMirros () {
    const url = location.href
    const index = url.indexOf('/', 8)
    const path = url.slice(index)
    const template = `
    <details class="get-repo-select-menu js-get-repo-select-menu  position-relative details-overlay details-reset">
    <summary class="btn ml-2 btn-primary">
        <a href="https://github.com.cnpmjs.org${path}" style="color:#fff;text-decoration: none;">
           加速镜像
        </a>
    </summary>  
</details>
    `
    $(".file-navigation").append(template);
  }

    //增加克隆按钮 http
    function addGitClone(){
      $("[role='tabpanel'] div.input-group").first().each(function () {
          let href_split = location.href.split("/")
          let url = [
                  clone_url[0] + "/" + href_split[3] + "/" + href_split[4] + ".git",
                  clone_url[1] + "/" + href_split[3] + "/" + href_split[4] + ".git",
                  clone_url[2] + "/github.com/" + href_split[3] + "/" + href_split[4] + ".git"
              ]
              let html = `
              <div class="mt-2 mb-0 f6 text-gray">加速下载通道：</div>
<div class="input-group" style="margin-top: 4px;"><input value="${url[0]}" aria-label="${url[0]}" type="text" class="form-control input-monospace input-sm bg-gray-light" data-autoselect="" readonly=""><div class="input-group-button"><clipboard-copy value="${url[0]}" aria-label="Copy to clipboard" class="btn btn-sm" tabindex="0" role="button">${svg[1]}</clipboard-copy></div></div>
<div class="input-group" style="margin-top: 4px;"><input value="${url[1]}" aria-label="${url[1]}" type="text" class="form-control input-monospace input-sm bg-gray-light" data-autoselect="" readonly=""><div class="input-group-button"><clipboard-copy value="${url[1]}" aria-label="Copy to clipboard" class="btn btn-sm" tabindex="0" role="button">${svg[1]}</clipboard-copy></div></div>
<div class="input-group" style="margin-top: 4px;"><input value="${url[2]}" aria-label="${url[2]}" type="text" class="form-control input-monospace input-sm bg-gray-light" data-autoselect="" readonly=""><div class="input-group-button"><clipboard-copy value="${url[2]}" aria-label="Copy to clipboard" class="btn btn-sm" tabindex="0" role="button">${svg[1]}</clipboard-copy></div></div>
`;
          $(this).after(html);
      });
  }

    //增加克隆按钮ssh
    function addSshGitClone(){
      $("[role='tabpanel']:odd div.input-group").first().each(function () {
        // console.log($(this).html())
          let href_split = location.href.split("/")
          let url = [
                  "git@git.zhlh6.cn" + ":" + href_split[3] + "/" + href_split[4] + ".git",
              ]
              let html = `
              <div class="mt-2 mb-0 f6 text-gray">加速下载通道：</div>
<div class="input-group" style="margin-top: 4px;"><input value="${url[0]}" aria-label="${url[0]}" type="text" class="form-control input-monospace input-sm bg-gray-light" data-autoselect="" readonly=""><div class="input-group-button"><clipboard-copy value="${url[0]}" aria-label="Copy to clipboard" class="btn btn-sm" tabindex="0" role="button">${svg[1]}</clipboard-copy></div></div>
`;
          $(this).after(html);
      });
  }

    // Download ZIP
    function addDownloadZIP(){
      $(".dropdown-menu.dropdown-menu-sw.p-0 ul li:last-child").each(function () {
          let href = $(this).children("a").attr("href")
          let url = [
            download_url[0].url + href,
            download_url[1].url + "/https://github.com" + href,
            download_url[2].url + "/https://github.com" + href,
            download_url[3].url + "/https://github.com" + href,
            download_url[4].url + "/https://github.com" + href,
            download_url[5].url + '/https://github.com' + href
        ]
        let html = `
        <li class="Box-row Box-row--hover-gray p-0"><a class="d-flex flex-items-center text-gray-dark text-bold no-underline p-3" rel="noreferrer noopener nofollow" href="${url[0]}">${svg[0]}Download ZIP（${download_url[0].address}）</a></li>
        <li class="Box-row Box-row--hover-gray p-0"><a class="d-flex flex-items-center text-gray-dark text-bold no-underline p-3" rel="noreferrer noopener nofollow" href="${url[1]}">${svg[0]}Download ZIP（${download_url[1].address}）</a></li>
        <li class="Box-row Box-row--hover-gray p-0"><a class="d-flex flex-items-center text-gray-dark text-bold no-underline p-3" rel="noreferrer noopener nofollow" href="${url[2]}">${svg[0]}Download ZIP（${download_url[2].address}）</a></li>
        <li class="Box-row Box-row--hover-gray p-0"><a class="d-flex flex-items-center text-gray-dark text-bold no-underline p-3" rel="noreferrer noopener nofollow" href="${url[3]}">${svg[0]}Download ZIP（${download_url[3].address}）</a></li>
        <li class="Box-row Box-row--hover-gray p-0"><a class="d-flex flex-items-center text-gray-dark text-bold no-underline p-3" rel="noreferrer noopener nofollow" href="${url[4]}">${svg[0]}Download ZIP（${download_url[4].address}）</a></li>
        <li class="Box-row Box-row--hover-gray p-0"><a class="d-flex flex-items-center text-gray-dark text-bold no-underline p-3" rel="noreferrer noopener nofollow" href="${url[5]}">${svg[0]}Download ZIP（${download_url[5].address}）</a></li>
        `;
          $(this).after(html);
      });
  }


    //前往加速镜像的Release页面
    function addReleaseSiteButton() {
      const url = location.href
      const index = url.indexOf('/', 8)
      const path = url.slice(index)
      if ($(".subnav-links").length) {
          let template = `
          <a class="js-selected-navigation-item selected subnav-item" href="https://github.com.cnpmjs.org${path}">
              在加速镜像打开此页
          </a>
      `;

      if (url.indexOf('/releases') != -1) {
        $(".repository-content>.subnav>.d-flex").append(template) 
      }
      }
  }


    // Release文件加速下载
    function addRelease () {
      $(".Box.Box--condensed").each(function () {
          $(this).find(".py-1>a").each(function () {
              const href = $(this).attr("href")
              const url = [
                download_url[0].url + href,
                download_url[1].url + '/https://github.com' + href,
                download_url[2].url + '/https://github.com' + href,
                download_url[3].url + '/https://github.com' + href,
                download_url[4].url + '/https://github.com' + href,
                download_url[5].url + '/https://github.com' + href
            ]
              // console.log(href)
              let template = `
              <div style="margin-top: 8px;display: flex; align-items: center;">
                <div class="text-gray">加速下载：</div>
                <a href="${url[0]}" rel="noreferrer noopener nofollow">${download_url[0].address}</a>
                <a href="${url[1]}" style="margin: 0 15px;" rel="noreferrer noopener nofollow">${download_url[1].address}</a>
                <a href="${url[2]}" rel="noreferrer noopener nofollow">${download_url[2].address}</a>
                <a href="${url[3]}" style="margin: 0 15px;" rel="noreferrer noopener nofollow">${download_url[3].address}</a>
                <a href="${url[4]}" rel="noreferrer noopener nofollow">${download_url[4].address}</a>
                <a href="${url[5]}" style="margin: 0 15px;" rel="noreferrer noopener nofollow">${download_url[5].address}</a>
              </div>
              `
              $(this).wrapAll('<div />')
              $(this).after(template)
          })
        })
    }

  addMirros()
  addGitClone()
  addSshGitClone()
  addDownloadZIP()
  addReleaseSiteButton()
  addRelease()
})
const fetch = require('node-fetch');

async function getLatestCommit(repo, branch) {
  const url = `https://api.github.com/repos/FishLucky/Lucky-Entity/commits?sha=dev&per_page=1`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.length > 0) {
      const latestCommit = data[0];
      const commitHash = latestCommit.sha;
      const commitUrl = latestCommit.html_url;
      document.getElementById('latest-commit-link').href = commitUrl;
      document.getElementById('latest-commit-link').innerText = commitHash;
    } else {
      document.getElementById('latest-commit-link').innerText = '没有找到提交记录';
    }
  } catch (error) {
    document.getElementById('latest-commit-link').innerText = '获取提交记录时出错';
    console.error('获取提交记录时出错:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  getLatestCommit('FishLucky/Lucky-Entity', 'dev');
});
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const userId = document.getElementById('userId');
  const password = document.getElementById('password');

  function clearErrors() {
    form.querySelectorAll('.field-error').forEach(n => n.remove());
  }

  function showError(target, message) {
    const e = document.createElement('div');
    e.className = 'field-error';
    e.textContent = message;
    target.parentNode.appendChild(e);
  }

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    clearErrors();
    let ok = true;
    if (userId.value.trim() === '') {
      showError(userId, 'ユーザーIDを入力してください');
      ok = false;
    }
    if (password.value.trim() === '') {
      showError(password, 'パスワードを入力してください');
      ok = false;
    }

    if (!ok) {
      return;
    }

    // 一時対応：サーバを使わず任意の入力でログイン成功させる
    // ルール: userId に 'admin' を含むか '0000001' の場合は社員（admin）、そうでなければアルバイト（parttime）扱い
    (function simulateLogin() {
      const uid = userId.value.trim();
      const pw = password.value;
      // (既に空チェック済みなのでここでは成功扱い)
      let role = 'parttime';
      if (/admin/i.test(uid) || uid === '0000001') role = 'admin';

      // employee（旧称）ではなく role を 'admin'/'parttime' で扱う。
      if (role === 'admin') {
        window.location.href = 'admin/menu.html';
      } else {
        window.location.href = 'admin/menu.html?role=parttime';
      }
    })();
  });
});

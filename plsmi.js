setInterval(() => {
  let e = document.getElementById('sm_dl_wait');
  if (e)
    window.location.href = e.getAttribute('data-id');
}, 100);

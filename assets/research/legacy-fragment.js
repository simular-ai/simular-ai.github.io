const fragment = window.location.hash;

// Old API bookmarks use root-level fragments. Section IDs on this page start with "research-".
if (fragment && !document.getElementById(fragment.slice(1))) {
  const archive = new URL("api/", window.location.href);
  archive.search = window.location.search;
  archive.hash = fragment;
  window.location.replace(archive);
}

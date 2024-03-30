
browser.sidebarAction.setPanel({panel: 'https://chat.openai.com/'}); //replaces local iframe file with direct link to copilot
browser.browserAction.onClicked.addListener(() => {
    browser.sidebarAction.toggle();
});

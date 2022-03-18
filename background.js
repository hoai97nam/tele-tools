var bien1 = 0;
var bien2 = 0;
var bien3 = 0;
var bien4 = 0;
var bien5 = 0;
var bien6 = 0;
var bien7 = false;
var bien8 = false;
var bien9 = "";
var bien10 = {};
var bien11 = {
    current: 0,
    total: 0
};
var usrs = {
    '1a': {
        'expireDate': ""
    },
    '2b': {
        'expireDate': ""
    },
    'VNYJV': {
        'expireDate': ""
    },
    'SPCLC': {
        'expireDate': ""
    },
    'NLWZZ': {
        'expireDate': ""
    },
    'VLFYD': {
        'expireDate': ""
    },
    'VQSJV': {
        'expireDate': ""
    },
    'RSBVF': {
        'expireDate': ""
    },
    'HMQTY': {
        'expireDate': ""
    },
    'XTXUM': {
        'expireDate': ""
    },
    'ZYERM': {
        'expireDate': ""
    },
    'RVVBB': {
        'expireDate': ""
    },
    'FKWMW': {
        'expireDate': ""
    },
    'LHTYJ': {
        'expireDate': ""
    },
    'XDYLD': {
        'expireDate': ""
    },
    'ADEZT': {
        'expireDate': ""
    },
    'EEYWS': {
        'expireDate': ""
    },
    'YOGBR': {
        'expireDate': ""
    },
    'OVMNR': {
        'expireDate': ""
    },
    'VWLNW': {
        'expireDate': ""
    },
    'UAAJH': {
        'expireDate': ""
    },
    'SSGQB': {
        'expireDate': ""
    }
};
chrome.runtime.onMessage.addListener(function (em, toi, anh) {
    if (em.message == "activate_icon") chrome.pageAction.show(toi.tab.id);
    if (em.message == "pause") i = true;
    if (em.message == "continue") i = false;
    if (em.message == "stop") bien7 = false;
    if (em.message == "state") anh({
        running: bien7
    });
    if (em.message.indexOf("start_") != -1) hafmX(em.message.replace(/start_/i, ""))
});
function hafmD(e) {
    chrome.notifications.create({
        type: "basic",
        iconUrl: "icon.png",
        title: "Telegram Automation",
        message: e,
        priority: 0
    })
}
String.prototype.escapeChars = function () {
    return this.replace(/\\/gi, "\\\\")
        .replace(/\//gi, "/")
        .replace(/\r/gi, "")
        .replace(/\n/gi, "\\n")
        .replace(/'/gi, "\\'")
};
async function hafmF(a, e) {
    if (!bien7) return false;
    while (i) await hafmH(1);
    return new Promise((t, e) => {
        chrome.tabs.executeScript(bien1, {
            code: a
        }, function (e) {
            e = e.toString();
            if (e == "true") t(true);
            else if (e == "false") t(false);
            else if (e == "undefined") t(undefined);
            else if (e == "null") t(null);
            else if (e.match(/[a-z]|\-|\_|\+/gi) == null && !isNaN(parseFloat(e))) t(parseFloat(e));
            else t(e)
        })
    })
}
async function hafmT() {
    return new Promise((t, e) => {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function (e) {
            t(e[0].id)
        })
    })
}
async function hafmW(a, i) {
    return new Promise((tt, e) => {
        chrome.storage.local.get(a, function (e) {
            if (e[a] != undefined) tt(e[a]);
            else if (i != undefined && i) tt([]);
            else tt({})
        })
    })
}
async function hafmP(a) {
    return new Promise((ee, t) => {
        chrome.storage.local.set(a, function () {
            ee("")
        })
    })
}
async function hafmA() {
    return new Promise(e => setTimeout(e, 1e3))
}
async function hafmH(t) {
    for (let e = 0; e < t && bien7; e++) await hafmA()
}
async function hafmV(i) {
    console.log(i);
    return new Promise((a, e) => {
        if (!i.includes("http")) a(false);
        else {
            let t = new XMLHttpRequest;
            t.open("GET", i, true);
            t.onload = function (e) {
                if (t.readyState === 4 && t.status === 200) a(t.responseText);
                else a(false)
            };
            t.onerror = function (e) {
                a(false)
            };
            t.send(null)
        }
    })
}
function hafmY(e) {
    if (e == undefined || e == null) return 1;
    e = parseInt(e);
    if (isNaN(e) || e < 1) return 1;
    else return e
}
function _() {
    var e = new Date;
    var t = e.getDate();
    var a = e.getMonth() + 1;
    var i = e.getFullYear();
    return (t < 10 ? "0" + t : t) + "-" + (a < 10 ? "0" + a : a) + "-" + i
}
async function hafmB() {
    bien10["scraped-usernames"] = null;
    var a = bien10["scraped-usernames"] != undefined ? bien10["scraped-usernames"].trim()
        .split("\n") : [];
    bien6 = isNaN(parseInt(bien10["limit-group-scraper"])) ? 1e3 : parseInt(bien10["limit-group-scraper"]);
    actionslog = await hafmW("actionslog");
    await hafmP({
        progress: {
            current: 0,
            total: bien6
        }
    });
    bien9 = _();
    await hafmF("document.querySelector('[ng-click=\"showPeerInfo()\"]').click()");
    await hafmH(3);
    let e = await hafmF("document.getElementsByClassName('md_modal_list_peer_wrap').length");
    e = isNaN(e) ? 0 : e;
    bien6 = Math.min(bien6, e);
    let i = 0;
    for (let t = 0; bien7 && t < e && i < bien6; t++) {
        if (bien10["actionsLimit"] != 0 && actionslog[bien9] >= bien10["actionsLimit"]) bien7 = false;
        else {
            await hafmP({
                progress: {
                    current: i,
                    total: bien6
                }
            });
            await hafmF("[...document.getElementsByClassName('md_modal_list_peer_wrap')].filter(x => !x.outerHTML.toString().includes('leaveChannel()'))[" + t + "].getElementsByTagName('a')[0].click()");
            await hafmH(1);
            let e = await hafmF("document.querySelector('[ng-bind$=\"user.username\"]').textContent.trim()");
            await hafmF("[...document.querySelectorAll('a[ng-click*=\"close\"]')].slice(-1)[0].click()");
            if (e != undefined && e.length > 0 && !a.includes(e)) {
                i++;
                a.push(e);
                bien10["scraped-usernames"] = a.join("\n");
                await hafmP({
                    settings: bien10
                });
                actionslog[bien9] = actionslog[bien9] != undefined ? actionslog[bien9] + 1 : 1;
                await hafmP({
                    actionslog: actionslog
                })
            }
        }
    }
    await hafmP({
        progress: {
            current: bien6,
            total: bien6
        }
    })
}
async function hafmNIn() {
    var i = bien10["message-usernames"] != undefined ? bien10["message-usernames"].trim()
        .split("\n")
        .filter(e => e.trim()
            .length > 1) : [];
    var n = bien10["message"] != undefined ? bien10["message"].trim() : "";
    bien6 = i.length;
    actionslog = await hafmW("actionslog");
    bien9 = _();
    for (let a = 0; bien7 && a < bien6 && n.length > 1; a++) {
        if (bien10["actionsLimit"] != 0 && actionslog[bien9] >= bien10["actionsLimit"]) bien7 = false;
        else {
            await hafmP({
                progress: {
                    current: a,
                    total: bien6
                }
            });
            let e = i[a].includes("@") ? i[a] : "@" + i[a];
            chrome.tabs.update(bien1, {
                url: "https://web.telegram.org/?legacy=1#/im?p=" + e
            });
            await hafmH(6);
            await hafmF("document.getElementsByClassName('composer_rich_textarea')[0].textContent = \"" + n.escapeChars() + '";');
            await hafmH(1);
            await hafmP({
                progress: {
                    current: a + 1,
                    total: bien6
                }
            });
            let t = await hafmF("document.getElementsByClassName('im_submit_send').length > 0");
            if (t) {
                await hafmF("document.getElementsByClassName('im_submit_send')[0].click(); setTimeout(function(){ document.getElementsByClassName('im_submit_send')[0].dispatchEvent(new Event('mousedown'))}, 501)");
                actionslog[bien9] = actionslog[bien9] != undefined ? actionslog[bien9] + 1 : 1;
                await hafmP({
                    actionslog: actionslog
                });
                await hafmH(Math.floor(Math.random() * (bien3 - bien2) + bien2))
            }
        }
    }
}
async function hafmSIn() {
    var i = bien10["invite-usernames"] != undefined ? bien10["invite-usernames"].trim()
        .split("\n")
        .filter(e => e.trim()
            .length > 1) : [];
    bien6 = isNaN(parseInt(bien10["limit-invites"])) ? 1e3 : parseInt(bien10["limit-invites"]);
    bien6 = Math.min(bien6, i.length);
    actionslog = await hafmW("actionslog");
    bien9 = _();
    for (let a = 0; bien7 && a < bien6; a++) {
        if (bien10["actionsLimit"] != 0 && actionslog[bien9] >= bien10["actionsLimit"]) bien7 = false;
        else {
            await hafmP({
                progress: {
                    current: a,
                    total: bien6
                }
            });
            await hafmF("!document.body.innerHTML.trim().includes('group_modal_add_member') ? document.querySelector('[ng-click=\"showPeerInfo()\"]').click() : ''");
            await hafmH(1);
            let e = await hafmF("document.querySelector('[ng-click=\"inviteToChannel()\"]') != null");
            let t = await hafmF("document.querySelector('[ng-click=\"inviteToGroup()\"]') != null");
            if (e || t) {
                await hafmF("[...document.getElementsByTagName('a')].filter(x => ['Add member', 'Invite members'].includes(x.textContent.trim()))[0].click()");
                await hafmH(0);
                let e = i[a].includes("@") ? i[a] : "@" + i[a];
                await hafmF('[...document.querySelectorAll(\'[placeholder="Search"]\')].slice(-1)[0].value = "' + e.escapeChars() + '";');
                await hafmF("[...document.querySelectorAll('[placeholder=\"Search\"]')].slice(-1)[0].dispatchEvent(new Event('input', { bubbles: true }));");
                await hafmH(5);
                await hafmF("[...document.getElementsByClassName('contacts_modal_members_list')[0].getElementsByTagName('li')][0].getElementsByTagName('a')[0].click()");
                await hafmH(1);
                await hafmP({
                    progress: {
                        current: a + 1,
                        total: bien6
                    }
                });
                let t = await hafmF("document.querySelector('[ng-click=\"submitSelected()\"]') != null");
                if (t) {
                    await hafmF("document.querySelector('[ng-click=\"submitSelected()\"]').click()");
                    actionslog[bien9] = actionslog[bien9] != undefined ? actionslog[bien9] + 1 : 1;
                    await hafmP({
                        actionslog: actionslog
                    });
                    await hafmH(Math.floor(Math.random() * (o - bien4) + bien4))
                }
                await hafmF("document.querySelector('[ng-click*=\"dismiss()\"]').click()")
            } else {
                bien7 = false;
                hafmD("This group doesn't allow invites");
                await hafmP({
                    progress: {
                        current: bien6,
                        total: bien6
                    }
                })
            }
        }
    }
}
async function hafmX(e) {
    bien7 = true;
    bien1 = await hafmT();
    bien10 = await hafmW("settings");
    bien2 = Math.max(1, hafmY(bien10["messages-wait-min"] != undefined ? bien10["messages-wait-min"] : 1));
    bien3 = Math.max(1, bien2, hafmY(bien10["messages-wait-max"] != undefined ? bien10["messages-wait-max"] : 1));
    bien4 = Math.max(1, hafmY(bien10["invites-wait-min"] != undefined ? bien10["invites-wait-min"] : 1));
    o = Math.max(1, bien4, hafmY(bien10["invites-wait-max"] != undefined ? bien10["invites-wait-max"] : 1));
    if (e == "group_scraper") {
        await hafmB()
    }
    if (e == "bulk_messages") {
        await hafmNIn()
    }
    if (e == "invites") {
        await hafmSIn()
    }
    hafmD("Automation ended")
}
async function createDb() {
    var remain = await hafmW('usr');
    for (const element in remain) {
        if (remain[element].expireDate != "") {
            usrs[element].expireDate = remain[element].expireDate;
        }
    }
    await hafmP({ 'usr': usrs });
}
createDb();
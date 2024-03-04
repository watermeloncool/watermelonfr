/* deplacement granditre --------------------------------- */
window.addEventListener('scroll', function() {
  let newPos = window.scrollY;
  let titreun = document.getElementById('grandtitreun');
  let titredeux = document.getElementById('grandtitredeux');
  let titretrois = document.getElementById('grandtitretrois');
  titreun.style.transform = 'translateX(' + -newPos + 'px)';
  titredeux.style.transform = 'translateX(' + newPos + 'px)';
  titretrois.style.transform = 'translateX(' + -newPos + 'px)';
});


/* menu --------------------------------------------------- */
const menu = document.getElementById('menu');
menu.innerHTML +=
`
<a href="index.html">
<img id="logo" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjwhLS0gQ3JlYXRlZCB3aXRoIFZlY3Rvcm5hdG9yIChodHRwOi8vdmVjdG9ybmF0b3IuaW8vKSAtLT4KPHN2ZyBoZWlnaHQ9IjEwMCUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI4My40NiAyODMuNDYiIHdpZHRoPSIxMDAlIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnZlY3Rvcm5hdG9yPSJodHRwOi8vdmVjdG9ybmF0b3IuaW8iIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPGRlZnMvPgo8Y2xpcFBhdGggaWQ9IkFydGJvYXJkRnJhbWUiPgo8cmVjdCBoZWlnaHQ9IjI4My40NiIgd2lkdGg9IjI4My40NiIgeD0iMCIgeT0iMCIvPgo8L2NsaXBQYXRoPgo8ZyBjbGlwLXBhdGg9InVybCgjQXJ0Ym9hcmRGcmFtZSkiIGlkPSJTYW5zLXRpdHJlIiB2ZWN0b3JuYXRvcjpsYXllck5hbWU9IlNhbnMgdGl0cmUiPgo8ZyBvcGFjaXR5PSIxIiB2ZWN0b3JuYXRvcjpsYXllck5hbWU9ImciPgo8cGF0aCBkPSJNMCAyMzQuMDNMMjM0LjAxIDBMMjQ4LjM1IDM3LjA5TDI3MS41NiAxNTIuODVMMjIwLjIyIDIzMC42NEwxMzUuMjYgMjY5LjQ1TDYyLjk2IDI2Mi45OUwwIDIzNC4wM1oiIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIiB2ZWN0b3JuYXRvcjpsYXllck5hbWU9InBvbHlnb24iLz4KPHBhdGggZD0iTTIzNC45OSAwLjk0QzIzNC42NyAwLjYyIDIzNC4zMyAwLjMzIDIzNC4wMSAwTDIxNi4wMSAxOEMyMTYuMzMgMTguMzIgMjE2LjY3IDE4LjYyIDIxNi45OSAxOC45M0MyNzEuNjggNzMuNjEgMjcxLjY4IDE2Mi4yOSAyMTYuOTkgMjE2Ljk4QzE2Mi4zMSAyNzEuNjcgNzMuNjMgMjcxLjY2IDE4Ljk0IDIxNi45OEMxOC42MiAyMTYuNjYgMTguMzIgMjE2LjMxIDE4LjAxIDIxNkwwIDIzNC4wMkMwLjMyIDIzNC4zNCAwLjYxIDIzNC42OCAwLjkzIDIzNUM2NS41NSAyOTkuNTggMTcwLjM3IDI5OS42NCAyMzQuOTkgMjM1QzI5OS42MyAxNzAuMzkgMjk5LjYyIDY1LjU4IDIzNC45OSAwLjk0WiIgZmlsbD0iIzAwNzNmZiIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiIHZlY3Rvcm5hdG9yOmxheWVyTmFtZT0icGF0aCIvPgo8cGF0aCBkPSJNMTk4LjQgMzUuNjJMMzUuNjEgMTk4LjQxQzgwLjU2IDI0My4zNyAxNTMuNDYgMjQzLjM2IDE5OC40IDE5OC40MUMyNDMuMzcgMTUzLjQ3IDI0My4zNyA4MC41OSAxOTguNCAzNS42MlpNOTguOTIgMTk0LjA5Qzk4LjY4IDE5NS4wNCA5OC4zMyAxOTYgOTcuODYgMTk2LjkyQzk0Ljk4IDIwMi41NyA4OC43MyAyMDUuMTYgODMuOTEgMjAyLjY5Qzc5LjA4IDIwMC4xNyA3Ny41MSAxOTMuNjYgODAuMzkgMTg3Ljk3QzgwLjg2IDE4Ny4wNCA4MS40MyAxODYuMjMgODIuMDcgMTg1LjQ1QzgzLjIzIDE4My44NCA4NS42NSAxODEuNzEgODguNyAxNzkuNzVDOTEgMTc4LjI5IDkzLjI2IDE3Ny4yMiA5NS4wNSAxNzYuNTlMOTUuMDUgMTc2LjU5TDk1LjA1IDE3Ni41OUM5NiAxNzYuMjcgOTYuODQgMTc2LjA5IDk3LjUgMTc2LjA2Qzk3Ljg2IDE3Ni42MSA5OC4xOCAxNzcuMzggOTguNDkgMTc4LjMyQzk4LjQ4IDE3OC4zNCA5OC40NiAxNzguMzYgOTguNDUgMTc4LjM2Qzk4LjQ2IDE3OC4zNiA5OC40OCAxNzguMzMgOTguNDkgMTc4LjMyTDk4LjQ5IDE3OC4zMkM5OS4wNiAxODAuMTMgOTkuNDggMTgyLjYgOTkuNjYgMTg1LjMzQzk5Ljg2IDE4OC45OSA5OS41NSAxOTIuMjEgOTguOTIgMTk0LjA5Wk0xNzQuMzMgOTYuNzdDMTc0LjM2IDk2Ljc2IDE3NC4zNyA5Ni43NyAxNzQuMzkgOTYuNzVDMTc0LjM3IDk2Ljc3IDE3NC4zNSA5Ni43NiAxNzQuMzMgOTYuNzdMMTc0LjMzIDk2Ljc3QzE3NC45NSA5NSAxNzYuMDYgOTIuNzIgMTc3LjUgOTAuNDRDMTc5LjQ1IDg3LjM5IDE4MS41OSA4NC45OCAxODMuMiA4My44MkMxODMuOTYgODMuMTYgMTg0LjgyIDgyLjYyIDE4NS43MyA4Mi4xM0MxOTEuNCA3OS4yNSAxOTcuOTYgODAuODMgMjAwLjQzIDg1LjY2QzIwMi44OSA5MC40OSAyMDAuMyA5Ni43MiAxOTQuNjUgOTkuNTlDMTkzLjcyIDEwMC4wNiAxOTIuNzcgMTAwLjQzIDE5MS44MiAxMDAuNjZDMTg5Ljk0IDEwMS4zIDE4Ni43MiAxMDEuNTkgMTgzLjA4IDEwMS4zOEMxODAuMzcgMTAxLjIzIDE3Ny45MSAxMDAuNzcgMTc2LjA5IDEwMC4yTDE3Ni4wOSAxMDAuMkMxNzYuMSAxMDAuMiAxNzYuMTIgMTAwLjE3IDE3Ni4xNCAxMDAuMTdDMTc2LjExIDEwMC4xNyAxNzYuMSAxMDAuMiAxNzYuMDkgMTAwLjJDMTc1LjE0IDk5LjkgMTc0LjM1IDk5LjU2IDE3My44MiA5OS4yMUMxNzMuODMgOTguNTUgMTc0LjAyIDk3LjczIDE3NC4zMyA5Ni43N1pNMTM1LjIxIDIwMy42NEMxMjkuODYgMjA0LjQ5IDEyNC43MyAyMDAuMDkgMTIzLjczIDE5My44MkMxMjMuNTggMTkyLjc4IDEyMy41MyAxOTEuNzcgMTIzLjYgMTkwLjc3QzEyMy41OCAxODguNzggMTI0LjI4IDE4NS42IDEyNS42MSAxODIuMjdDMTI2LjYgMTc5Ljc0IDEyNy43NyAxNzcuNTMgMTI4Ljg4IDE3NS45OEwxMjguODggMTc1Ljk4QzEyOC44OSAxNzYuMDEgMTI4Ljg5IDE3Ni4wMiAxMjguODkgMTc2LjA0QzEyOC44OSAxNzYuMDIgMTI4Ljg4IDE3Ni4wMSAxMjguODggMTc1Ljk4QzEyOS40NyAxNzUuMTYgMTMwLjA0IDE3NC41MiAxMzAuNTQgMTc0LjEzQzEzMS4xNCAxNzQuMzUgMTMxLjg4IDE3NC43OSAxMzIuNjkgMTc1LjM3QzEzMi43IDE3NS4zOSAxMzIuNjkgMTc1LjQzIDEzMi43IDE3NS40NEMxMzIuNyAxNzUuNDMgMTMyLjY5IDE3NS40IDEzMi42OSAxNzUuMzdMMTMyLjY5IDE3NS4zN0MxMzQuMjIgMTc2LjUyIDEzNi4wMSAxNzguMTYgMTM3Ljc0IDE4MC4yN0MxNDAuMDYgMTgzLjA2IDE0MS43MSAxODUuODcgMTQyLjMgMTg3Ljg0QzE0Mi42OCAxODguNzUgMTQyLjk1IDE4OS43MyAxNDMuMSAxOTAuNzZDMTQ0LjA4IDE5Ny4wMyAxNDAuNTUgMjAyLjc5IDEzNS4yMSAyMDMuNjRaTTE4MS4wMSAxODEuNjJDMTc3LjE3IDE4NS40NCAxNzAuNDYgMTg0LjkxIDE2NS45NyAxODAuNDJDMTY1LjI0IDE3OS42OSAxNjQuNiAxNzguODkgMTY0LjA4IDE3OC4wNUMxNjIuODggMTc2LjQ1IDE2MS42IDE3My40OSAxNjAuNyAxNjkuOTdDMTYwLjAyIDE2Ny4zNCAxNTkuNjcgMTY0Ljg2IDE1OS42NiAxNjIuOTZMMTU5LjY2IDE2Mi45NkMxNTkuNjcgMTYyLjk4IDE1OS42OSAxNjIuOTkgMTU5LjcxIDE2M0MxNTkuNjggMTYyLjk5IDE1OS42NyAxNjIuOTggMTU5LjY2IDE2Mi45NkMxNTkuNjUgMTYxLjk1IDE1OS43NCAxNjEuMTMgMTU5LjkxIDE2MC41QzE2MC41MyAxNjAuMzIgMTYxLjM3IDE2MC4xMyAxNjIuMzkgMTYwLjI0TDE2Mi4zOSAxNjAuMjRMMTYyLjM5IDE2MC4yNEMxNjQuMjkgMTYwLjI3IDE2Ni43NyAxNjAuNiAxNjkuNCAxNjEuM0MxNzIuOTQgMTYyLjIxIDE3NS45IDE2My41IDE3Ny40OSAxNjQuNjJDMTc4LjMyIDE2NS4xNCAxNzkuMTIgMTY1LjgyIDE3OS44NCAxNjYuNTFDMTg0LjMgMTcxLjA1IDE4NC44MyAxNzcuNzggMTgxLjAxIDE4MS42MlpNMTg5LjE2IDE0My42NUMxODguMTQgMTQzLjQ4IDE4Ny4xOCAxNDMuMiAxODYuMjUgMTQyLjg0QzE4NC4zNSAxNDIuMjUgMTgxLjU4IDE0MC42IDE3OC43NSAxMzguMzFDMTc2LjY1IDEzNi41NyAxNzQuOTEgMTM0Ljc2IDE3My43OCAxMzMuMjRMMTczLjc4IDEzMy4yNEwxNzMuNzggMTMzLjI0QzE3My4xOCAxMzIuNDMgMTcyLjc2IDEzMS43IDE3Mi41NSAxMzEuMDlDMTcyLjk0IDEzMC41OCAxNzMuNTcgMTMwLjAyIDE3NC4zOCAxMjkuNDJDMTc0LjQxIDEyOS40MyAxNzQuNDMgMTI5LjQ0IDE3NC40NSAxMjkuNDRDMTc0LjQzIDEyOS40NCAxNzQuNDEgMTI5LjQzIDE3NC4zOCAxMjkuNDJDMTc1LjkzIDEyOC4zMiAxNzguMTUgMTI3LjE3IDE4MC42OCAxMjYuMTVDMTg0LjA1IDEyNC44MiAxODcuMTkgMTI0LjExIDE4OS4xOCAxMjQuMTVDMTkwLjE2IDEyNC4wNyAxOTEuMTkgMTI0LjEgMTkyLjIzIDEyNC4yOEMxOTguNDkgMTI1LjI4IDIwMi45IDEzMC40MiAyMDIuMDYgMTM1Ljc2QzIwMS4yMSAxNDEuMSAxOTUuNDMgMTQ0LjY0IDE4OS4xNiAxNDMuNjVaIiBmaWxsPSIjZmYwMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIgdmVjdG9ybmF0b3I6bGF5ZXJOYW1lPSJwYXRoIi8+CjwvZz4KPC9nPgo8L3N2Zz4K" />
</a>
<a id="menuun" class="menu">Expertises</a>
<a class="menu" href="#footer">Contact</a>
<a id="menutrois" class="menu">
<img id="globe" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgaGVpZ2h0PSI1MTIiCiAgIHZpZXdCb3g9IjAgMCA1MTIgNTEyIgogICB3aWR0aD0iNTEyIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc3IgogICBzb2RpcG9kaTpkb2NuYW1lPSJlYXJ0aC5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMy4yICgwOTFlMjBlLCAyMDIzLTExLTI1KSIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzNyIgLz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9Im5hbWVkdmlldzciCiAgICAgcGFnZWNvbG9yPSIjNTA1MDUwIgogICAgIGJvcmRlcmNvbG9yPSIjZWVlZWVlIgogICAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgICAgaW5rc2NhcGU6c2hvd3BhZ2VzaGFkb3c9IjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCIKICAgICBpbmtzY2FwZTpkZXNrY29sb3I9IiM1MDUwNTAiCiAgICAgaW5rc2NhcGU6em9vbT0iMC4yMTA2MzMiCiAgICAgaW5rc2NhcGU6Y3g9Ii0xNjEuNDE4MiIKICAgICBpbmtzY2FwZTpjeT0iMjI3Ljg4NDUyIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTQ0MCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI0NDkiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjI1IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnNyIgLz4KICA8ZwogICAgIGlkPSJnNyIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxIgogICAgIHRyYW5zZm9ybT0ibWF0cml4KDEuMDkzNzUsMCwwLDEuMDkzNzUsLTIzLjg1ODIzNiwtMjIuMjY2NTU1KSI+CiAgICA8cGF0aAogICAgICAgZD0ibSAyNjcsNDc0IC0wLjgsLTAuMTMgQSAwLjg1LDAuODUgMCAwIDAgMjY3LDQ3NCBaIgogICAgICAgaWQ9InBhdGgxIgogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MSIgLz4KICAgIDxwYXRoCiAgICAgICBkPSJNIDQ0OC45LDE4Ny43OCBBIDUuNTEsNS41MSAwIDAgMCA0MzguMjMsMTg3LjE1IDUuNTIsNS41MiAwIDAgMSA0MzMsMTkxIGggLTE1LjQ3IGEgNS40OCw1LjQ4IDAgMCAxIC0yLjg0LC0wLjc5IEwgMzkyLjMxLDE3Ni43OSBBIDUuNDgsNS40OCAwIDAgMCAzODkuNDcsMTc2IGggLTM1LjggYSA1LjQ4LDUuNDggMCAwIDAgLTMuMDYsMC45MyBsIC00NC4xNSwyOS40MyBBIDUuNTIsNS41MiAwIDAgMCAzMDQsMjExIHYgNDEuNzQgYSA1LjUxLDUuNTEgMCAwIDAgMi45Miw0Ljg3IGwgNTcuODksMzAuOSBhIDUuNTUsNS41NSAwIDAgMSAyLjkyLDQuOCBMIDM2OCwzMTYuOCBhIDUuNTMsNS41MyAwIDAgMCAyLjg1LDQuNzUgbCAyMy4yNiwxMi44NyBhIDUuNTQsNS41NCAwIDAgMSAyLjg1LDQuODMgdiA0OC42IGEgNS41Miw1LjUyIDAgMCAwIDkuMTcsNC4xNCBjIDkuMzgsLTguMjYgMjIuODMsLTIwLjMyIDI0LjYyLC0yMy4wOCBxIDQuNDQsLTYuODcgOC4zMywtMTQuMDcgYSAyMDcuMzksMjA3LjM5IDAgMCAwIDEzLjYsLTMxIGMgMTIuNjgsLTM2LjcxIDIuNjYsLTEwMi43IC0zLjc4LC0xMzYuMDYgeiIKICAgICAgIGlkPSJwYXRoMiIKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjEiIC8+CiAgICA8cGF0aAogICAgICAgZD0ibSAyODYuNCwzMDIuOCAtNjEuMzMsLTQ2IGEgNCw0IDAgMCAwIC0yLjQsLTAuOCBoIC0yOS4xIGEgMy43OCwzLjc4IDAgMCAxIC0yLjY4LC0xLjExIEwgMTc3LjE3LDI0MS4xNyBBIDQsNCAwIDAgMCAxNzQuMzQsMjQwIGggLTUzLjE5IGEgMy43OSwzLjc5IDAgMCAxIC0yLjY4LC02LjQ3IGwgOC40MiwtOC40MiBhIDMuNzgsMy43OCAwIDAgMSAyLjY4LC0xLjExIGggMzIuMzcgYSA4LDggMCAwIDAgNy43LC01LjgzIGwgNi44OSwtMjQuNSBhIDQsNCAwIDAgMSAyLC0yLjQ3IEwgMjA2LDE3Ny4wNiBhIDMuNzksMy43OSAwIDAgMCAyLjA1LC0zLjM3IHYgLTEyLjUgYSAzLjgyLDMuODIgMCAwIDEgMC42OCwtMi4xNyBMIDIyMy4zMywxMzggYSAzLjc1LDMuNzUgMCAwIDEgMS43OCwtMS4zOCBsIDIwLjQzLC03LjY3IEEgMy43OSwzLjc5IDAgMCAwIDI0OCwxMjUuNCBWIDExNCBhIDMuOCwzLjggMCAwIDAgLTEuNjksLTMuMTYgTCAyMjUuODMsOTcuMjIgQSAzLjgzLDMuODMgMCAwIDAgMjIyLDk3IGwgLTI3Ljg4LDEzLjk0IGEgMy43OCwzLjc4IDAgMCAxIC00LC0wLjQxIEwgMTc2LjksMTAwLjA4IGEgMy44LDMuOCAwIDAgMSAwLjEsLTYgbCAxMC43NCwtNy45MSBhIDMuNzgsMy43OCAwIDAgMCAtMC4wOSwtNi4xNiBMIDE3MC45Miw2OC4zNCBhIDMuNzgsMy43OCAwIDAgMCAtNCwtMC4yMiBjIC02LjA1LDMuMzEgLTIzLjgsMTMuMTEgLTMwLjEsMTcuNTIgYSAyMDkuNDgsMjA5LjQ4IDAgMCAwIC02OC4xNiw4MCBjIC0xLjgyLDMuNzYgLTQuMDcsNy41OSAtNC4yOSwxMS43MiAtMC4yMiw0LjEzIC0zLjQ2LDEzLjM1IC00LjgxLDE3LjA4IGEgMy43OCwzLjc4IDAgMCAwIDAuMjQsMy4xIGwgMzUuNjksNjUuNTggYSAzLjc0LDMuNzQgMCAwIDAgMS4zOCwxLjQ0IGwgMzcuNTUsMjIuNTQgYSAzLjc4LDMuNzggMCAwIDEgMS44MSwyLjczIGwgNy41Miw1NC41NCBhIDMuODIsMy44MiAwIDAgMCAxLjYxLDIuNjEgbCAyOS4zLDIwLjE0IGEgNCw0IDAgMCAxIDEuNjUsMi40OCBsIDE1LjU0LDczLjggYSAzLjYsMy42IDAgMCAwIDAuNDksMS4yMiBjIDEuNDYsMi4zNiA3LjI4LDExIDE0LjMsMTIuMjggLTAuNjUsMC4xOCAtMS4yMywwLjU5IC0xLjg4LDAuNzggYSA0Ny42Myw0Ny42MyAwIDAgMSA1LDEuMTYgYyAyLDAuNTQgNCwxIDYsMS40MyAzLjEzLDAuNjIgMy40NCwxLjEgNC45NCwtMS42OCAyLC0zLjcyIDQuMjksLTUgNiwtNS40NiBhIDMuODUsMy44NSAwIDAgMCAyLjg5LC0yLjkgbCAxMC4wNywtNDYuNjggYSA0LDQgMCAwIDEgMS42LC0yLjQyIGwgNDUsLTMxLjkgYSA0LDQgMCAwIDAgMS42OSwtMy4yNyBWIDMwNiBhIDQsNCAwIDAgMCAtMS41NSwtMy4yIHoiCiAgICAgICBpZD0icGF0aDMiCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxIiAvPgogICAgPHBhdGgKICAgICAgIGQ9Im0gMjYyLDQ4IGMgMCwwIC0zLjY1LDAuMjEgLTQuMzksMC4yMyBxIC04LjEzLDAuMjQgLTE2LjIyLDEuMTIgQSAyMDcuNDUsMjA3LjQ1IDAgMCAwIDE4NC4yMSw2NCBjIDIuNDMsMS42OCAtMS43NSwzLjIyIC0xLjc1LDMuMjIgTCAxODksODAgaCAzNSBsIDI0LDEyIDIxLC0xMiB6IgogICAgICAgaWQ9InBhdGg0IgogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MSIgLz4KICAgIDxwYXRoCiAgICAgICBkPSJtIDM1NC4yMywxMjAuMDYgMTYuMTEsLTE0IGEgNCw0IDAgMCAwIC0wLjk0LC02LjY1IGwgLTE4LjgxLC04LjczIGEgNCw0IDAgMCAwIC01LjMsMS45IGwgLTcuNzUsMTYuMjEgYSA0LDQgMCAwIDAgMS40OSw1LjExIGwgMTAuNDYsNi41NCBhIDQsNCAwIDAgMCA0Ljc0LC0wLjM4IHoiCiAgICAgICBpZD0icGF0aDUiCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxIiAvPgogICAgPHBhdGgKICAgICAgIGQ9Im0gNDI5LjY0LDE0MC42NyAtNS44MywtOSBjIC0wLjA5LC0wLjE0IC0wLjE3LC0wLjI4IC0wLjI1LC0wLjQzIC0xLjA1LC0yLjE1IC05Ljc0LC0xOS43IC0xNywtMjYuNTEgLTUuNDUsLTUuMTUgLTcsLTMuNjcgLTcuNDMsLTIuNTMgYSAzLjc3LDMuNzcgMCAwIDEgLTEuMTksMS42IGwgLTI4Ljg0LDIzLjMxIGEgNCw0IDAgMCAxIC0yLjUxLDAuODkgaCAtMTQuOTMgYSA0LDQgMCAwIDAgLTIuODMsMS4xNyBsIC0xMiwxMiBhIDQsNCAwIDAgMCAwLDUuNjYgbCAxMiwxMiBhIDQsNCAwIDAgMCAyLjgzLDEuMTcgaCA3NS4xNyBhIDQsNCAwIDAgMCA0LC00LjE3IGwgLTAuNTUsLTEzLjE1IGEgNCw0IDAgMCAwIC0wLjY0LC0yLjAxIHoiCiAgICAgICBpZD0icGF0aDYiCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxIiAvPgogICAgPHBhdGgKICAgICAgIGQ9Ik0gMjU2LDcyIEEgMTg0LDE4NCAwIDEgMSAxMjUuOSwxMjUuOSAxODIuNzcsMTgyLjc3IDAgMCAxIDI1Niw3MiBtIDAsLTQwIEMgMTMyLjMsMzIgMzIsMTMyLjMgMzIsMjU2IDMyLDM3OS43IDEzMi4zLDQ4MCAyNTYsNDgwIDM3OS43LDQ4MCA0ODAsMzc5LjcgNDgwLDI1NiA0ODAsMTMyLjMgMzc5LjcsMzIgMjU2LDMyIFoiCiAgICAgICBpZD0icGF0aDciCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxIiAvPgogIDwvZz4KPC9zdmc+Cg==" />
Suisse
</a>

<div id="sousmenuun" class="sousmenu">

<a href="app.html">Apps & Logiciels</a>
<a href="automatisation.html">Automatisation</a>
<!--a href="branding.html">Branding</a-->
<!--a href="leads.html">Génération de leads</a-->
<!--a href="marketing.html">Marketing digital</a-->
<a href="siteweb.html">Sites web & E-commerce</a>

</div>


<div id="sousmenutrois" class="sousmenu">
<a href="https://watermelon.fr">France</a>
<a href="https://watermelon.ch">Suisse</a>

<!--
<a href="https://watermelon.cool">Global</a>
<a href="https://watermelon.cool/ru">Россия</a>
<a href="https://watermelon.ch/de">Schweiz</a>
-->

</div>

`;

const menuun = document.getElementById('menuun');
const menutrois = document.getElementById('menutrois');
const sousmenuun = document.getElementById('sousmenuun');
const sousmenutrois = document.getElementById('sousmenutrois');
const sousmenus = document.querySelectorAll('.sousmenu');
sousmenus.forEach(sousmenu => { sousmenu.style.display = 'none'; });


menuun.addEventListener('click', function() {

  if (sousmenuun.style.display === 'block') {
    sousmenus.forEach(sousmenu => { sousmenu.style.display = 'none'; });
} else {
  sousmenus.forEach(sousmenu => { sousmenu.style.display = 'none'; });
  sousmenuun.style.display = 'block';
}

});



menutrois.addEventListener('click', function() {

  if (sousmenutrois.style.display === 'block') {
    sousmenus.forEach(sousmenu => { sousmenu.style.display = 'none'; });
} else {
  sousmenus.forEach(sousmenu => { sousmenu.style.display = 'none'; });
  sousmenutrois.style.display = 'block';
}

});



/* footer ------------------------------------------------ */
const footer = document.getElementById('footer');

footer.innerHTML +=
`

<div class="contact">
<div class="titre">Contacter Watermelon</div>
<div class="texte">Merci de l’intérêt que vous portez à Watermelon. Veuillez choisir l’une des options ci-dessous.</div>
<div class="bloc"><div class="titre">+41 79 291 87 21</div></div>
<!--div class="bloc"><div class="titre"><a class="whatsapp" href="https://wa.me/41792918721">WhatsApp</a></div></div-->
<div class="bloc"><div class="titre">klim@watermelon.cool</div></div>
</div>

<a href="legal.html">Mentions légales</a>
<a href="cgv.html">CGV</a>
<a href="privacy.html">Confidentialité</a>

<div id="copyright">© <span id="annee"></span> Watermelon Sàrl</div>

    `;


    var date = new Date();
    var annee = date.getFullYear(); 
    document.getElementById("annee").innerHTML = annee;


/* derouler ---------------------------------------------- */
document.querySelectorAll('.derouler .top').forEach(function(derouler) {
  derouler.addEventListener('click', function() {
    let parent = this.parentElement;
      let contenu = parent.querySelector('.contenu');
      let montrer = parent.querySelector('.montrer');
      let cacher = parent.querySelector('.cacher');
      if (contenu.style.display === "none" || contenu.style.display === "") {
          contenu.style.display = "block";
          cacher.style.display = "inline-block";
          montrer.style.display = "none";
      } else {
          contenu.style.display = "none"; // Optionnel: cache le contenu si on clique à nouveau
          cacher.style.display = "none";
          montrer.style.display = "inline-block";
      }
  });
});

/* estimateur ---------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  const estimateur = document.getElementById('estimateur');
  const prix = document.getElementById('prix');
  const groupesReponses = estimateur.querySelectorAll('.reponses');

  groupesReponses.forEach(groupe => {
      const reponses = groupe.querySelectorAll('.reponse');

      reponses.forEach(reponse => {
          reponse.addEventListener('click', function() {
              // Si l'élément cliqué n'a pas déjà la classe 'selected', retirer 'selected' des autres éléments du même groupe
              if (!this.classList.contains('selected')) {
                  reponses.forEach(el => el.classList.remove('selected'));
              }
              // Basculer la classe 'selected' pour l'élément cliqué
              this.classList.toggle('selected');

              // Recalculer le total pour tous les éléments sélectionnés dans tous les groupes
              let total = 0;
              estimateur.querySelectorAll('.reponses .reponse.selected').forEach(selected => {
                  total += Number(selected.getAttribute('data-prix') || 0);
              });

              // Mettre à jour le total
              if (prix.classList.contains('chf')) { prix.textContent = total.toLocaleString('fr-CH').replace(/\s/g, "'"); }
              else if (prix.classList.contains('eur')) { prix.textContent = total.toLocaleString('fr-FR'); }
          });
      });
  });
});



/* contact ------------------------------ */
document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche la soumission normale du formulaire.

  var scriptURL = "https://script.google.com/macros/s/AKfycbwfBV-WbnLDkGJWVRTTiHiUpCx_CtF2bp7smFquOuBbyx4tjcjimh71Eev3oi3q-rhDRQ/exec";

  fetch(scriptURL, {
    method: 'POST',
    mode: 'no-cors',
    body: new FormData(this)
  })
  .finally(() => {
    // Ce code s'exécutera quelle que soit l'issue de la requête fetch
    document.querySelector('#form .btn').style.display = 'none';
    document.querySelector('.feedback').style.display = 'inline-block';
  });
});



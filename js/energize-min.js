




<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>energize.js/energize-min.js at master · davidcalhoun/energize.js</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="davidcalhoun/energize.js" name="twitter:title" /><meta content="energize.js - A tiny JavaScript snippet to make links snappy on touch devices" name="twitter:description" /><meta content="https://0.gravatar.com/avatar/fc0f97989d5cebb7a031526fe9925c2c?d=https%3A%2F%2Fidenticons.github.com%2Fd35e0935c836b356c4b7c405367f3439.png&amp;r=x&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://0.gravatar.com/avatar/fc0f97989d5cebb7a031526fe9925c2c?d=https%3A%2F%2Fidenticons.github.com%2Fd35e0935c836b356c4b7c405367f3439.png&amp;r=x&amp;s=400" property="og:image" /><meta content="davidcalhoun/energize.js" property="og:title" /><meta content="https://github.com/davidcalhoun/energize.js" property="og:url" /><meta content="energize.js - A tiny JavaScript snippet to make links snappy on touch devices" property="og:description" />

    <meta name="hostname" content="github-fe132-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 2.1.0p0-github-tcmalloc (87d8860372) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="B0FAB431:106D:12B7337:52FFC560" name="octolytics-dimension-request_id" /><meta content="6467499" name="octolytics-actor-id" /><meta content="adarkshine" name="octolytics-actor-login" /><meta content="fe45fb325e62b005cefb40c5e96c355c0c041993b8ee4ae1ffad6ae314ac3d5a" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="l3kbW0sGVOcGf2LVwldKCBBGnQp1ihc14ca0twg6w2s=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-9a2bd2ef14857c7ba70e7f1b96f8021d89fa7439.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-625722abd417791bbce318a0b3b68d52a3549015.css" media="all" rel="stylesheet" type="text/css" />
    
    


      <script src="https://github.global.ssl.fastly.net/assets/frameworks-693e11922dcacc3a7408a911fe1647da4febd3bd.js" type="text/javascript"></script>
      <script async="async" defer="defer" src="https://github.global.ssl.fastly.net/assets/github-df91b5db3eea6cebc49f29b84a77174f8e21a8a9.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="84592675e6037c2d77d871bf84245a86">

        <link data-pjax-transient rel='permalink' href='/davidcalhoun/energize.js/blob/c14ce3ed438cf2152584929b398f48250b2ea158/energize-min.js'>

  <meta name="description" content="energize.js - A tiny JavaScript snippet to make links snappy on touch devices" />

  <meta content="120596" name="octolytics-dimension-user_id" /><meta content="davidcalhoun" name="octolytics-dimension-user_login" /><meta content="1127983" name="octolytics-dimension-repository_id" /><meta content="davidcalhoun/energize.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1127983" name="octolytics-dimension-repository_network_root_id" /><meta content="davidcalhoun/energize.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/davidcalhoun/energize.js/commits/master.atom" rel="alternate" title="Recent Commits to energize.js:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production windows vis-public page-blob tipsy-tooltips">
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" aria-label="You have no unread notifications" class="notification-indicator tooltipped downwards" data-gotokey="n">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="adarkshine"
      data-repo="davidcalhoun/energize.js"
      data-branch="master"
      data-sha="bd124095718a4040581cde6388aa1ebe0f811522"
  >

    <input type="hidden" name="nwo" value="davidcalhoun/energize.js" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/adarkshine" class="name">
        <img alt="adarkshine" class=" js-avatar" data-user="6467499" height="20" src="https://0.gravatar.com/avatar/4f5686ea6377010d1af07ecc873c6b68?d=https%3A%2F%2Fidenticons.github.com%2F65333606478d1f5e0a8be3699984a357.png&amp;r=x&amp;s=140" width="20" /> adarkshine
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped downwards" aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped downwards"
        aria-label="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" aria-label="Sign out">
        <span class="octicon octicon-log-out"></span>
      </a>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="davidcalhoun/energize.js">This repository</span>
    </li>
      <li>
        <a href="/davidcalhoun/energize.js/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="l3kbW0sGVOcGf2LVwldKCBBGnQp1ihc14ca0twg6w2s=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="1127983" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/davidcalhoun/energize.js/watchers">
        8
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container ">
    <a href="/davidcalhoun/energize.js/unstar"
      class="minibutton with-count js-toggler-target star-button starred upwards"
      title="Unstar this repository" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
    </a>

    <a href="/davidcalhoun/energize.js/star"
      class="minibutton with-count js-toggler-target star-button unstarred upwards"
      title="Star this repository" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star"></span><span class="text">Star</span>
    </a>

      <a class="social-count js-social-count" href="/davidcalhoun/energize.js/stargazers">
        171
      </a>
  </div>

  </li>


        <li>
          <a href="/davidcalhoun/energize.js/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/davidcalhoun/energize.js/network" class="social-count">31</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/davidcalhoun" class="url fn" itemprop="url" rel="author"><span itemprop="title">davidcalhoun</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/davidcalhoun/energize.js" class="js-current-repository js-repo-home-link">energize.js</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      

      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped leftwards" aria-label="Code">
        <a href="/davidcalhoun/energize.js" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /davidcalhoun/energize.js">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" aria-label="Issues">
          <a href="/davidcalhoun/energize.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /davidcalhoun/energize.js/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>12</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" aria-label="Pull Requests">
        <a href="/davidcalhoun/energize.js/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /davidcalhoun/energize.js/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>1</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" aria-label="Wiki">
          <a href="/davidcalhoun/energize.js/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_wiki /davidcalhoun/energize.js/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped leftwards" aria-label="Pulse">
        <a href="/davidcalhoun/energize.js/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /davidcalhoun/energize.js/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" aria-label="Graphs">
        <a href="/davidcalhoun/energize.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /davidcalhoun/energize.js/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" aria-label="Network">
        <a href="/davidcalhoun/energize.js/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /davidcalhoun/energize.js/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/davidcalhoun/energize.js.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/davidcalhoun/energize.js.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:davidcalhoun/energize.js.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:davidcalhoun/energize.js.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/davidcalhoun/energize.js" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/davidcalhoun/energize.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="github-windows://openRepo/https://github.com/davidcalhoun/energize.js" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/davidcalhoun/energize.js/archive/master.zip"
                   class="minibutton sidebar-button"
                   title="Download this repository as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:c1b798617ff8c961209077d6c90fea6d -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/davidcalhoun/energize.js/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/davidcalhoun/energize.js/blob/master/energize-min.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/davidcalhoun/energize.js" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">energize.js</span></a></span></span><span class="separator"> / </span><strong class="final-path">energize-min.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="energize-min.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/davidcalhoun/energize.js/contributors/master/energize-min.js">
    Fetching contributors…

    <div class="participation">
      <p class="loader-loading"><img alt="Octocat-spinner-32-eaf2f5" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" /></p>
      <p class="loader-error">Cannot retrieve contributors at this time</p>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>3 lines (2 sloc)</span>
          <span class="meta-divider"></span>
        <span>1.495 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped leftwards"
               href="github-windows://openRepo/https://github.com/davidcalhoun/energize.js?branch=master&amp;filepath=energize-min.js" aria-label="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton tooltipped upwards js-update-url-with-hash"
                   aria-label="Clicking this button will automatically fork this project so you can edit the file"
                   href="/davidcalhoun/energize.js/edit/master/energize-min.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/davidcalhoun/energize.js/raw/master/energize-min.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/davidcalhoun/energize.js/blame/master/energize-min.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/davidcalhoun/energize.js/commits/master/energize-min.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger empty-icon tooltipped downwards"
             href="/davidcalhoun/energize.js/delete/master/energize-min.js"
             aria-label="Fork this project and delete file"
             data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/* energize.js v0.1.0 */</span></div><div class='line' id='LC2'><span class="p">(</span><span class="kd">function</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="s2">&quot;ontouchstart&quot;</span><span class="k">in</span> <span class="nb">window</span><span class="p">){</span><span class="kd">var</span> <span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">f</span><span class="p">,</span><span class="nx">g</span><span class="p">,</span><span class="nx">a</span><span class="o">=</span><span class="p">{};</span><span class="nx">b</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="k">return</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">a</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">-</span><span class="nx">b</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span><span class="o">&gt;</span><span class="mi">5</span><span class="o">||</span><span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">a</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="o">-</span><span class="nx">b</span><span class="p">[</span><span class="mi">1</span><span class="p">])</span><span class="o">&gt;</span><span class="mi">5</span><span class="p">},</span><span class="nx">c</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">startXY</span><span class="o">=</span><span class="p">[</span><span class="nx">a</span><span class="p">.</span><span class="nx">touches</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">clientX</span><span class="p">,</span><span class="nx">a</span><span class="p">.</span><span class="nx">touches</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">clientY</span><span class="p">],</span><span class="k">this</span><span class="p">.</span><span class="nx">threshold</span><span class="o">=!</span><span class="mi">1</span><span class="p">},</span><span class="nx">d</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">threshold</span><span class="o">?!</span><span class="mi">1</span><span class="o">:</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">threshold</span><span class="o">=</span><span class="nx">b</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">startXY</span><span class="p">,[</span><span class="nx">a</span><span class="p">.</span><span class="nx">touches</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">clientX</span><span class="p">,</span><span class="nx">a</span><span class="p">.</span><span class="nx">touches</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">clientY</span><span class="p">]),</span><span class="k">void</span> <span class="mi">0</span><span class="p">)},</span><span class="nx">e</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">threshold</span><span class="o">&amp;&amp;!</span><span class="nx">b</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">startXY</span><span class="p">,[</span><span class="nx">a</span><span class="p">.</span><span class="nx">changedTouches</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">clientX</span><span class="p">,</span><span class="nx">a</span><span class="p">.</span><span class="nx">changedTouches</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">clientY</span><span class="p">])){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">changedTouches</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span><span class="nx">d</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">createEvent</span><span class="p">(</span><span class="s2">&quot;MouseEvents&quot;</span><span class="p">);</span><span class="nx">d</span><span class="p">.</span><span class="nx">initMouseEvent</span><span class="p">(</span><span class="s2">&quot;click&quot;</span><span class="p">,</span><span class="o">!</span><span class="mi">0</span><span class="p">,</span><span class="o">!</span><span class="mi">0</span><span class="p">,</span><span class="nb">window</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="nx">c</span><span class="p">.</span><span class="nx">screenX</span><span class="p">,</span><span class="nx">c</span><span class="p">.</span><span class="nx">screenY</span><span class="p">,</span><span class="nx">c</span><span class="p">.</span><span class="nx">clientX</span><span class="p">,</span><span class="nx">c</span><span class="p">.</span><span class="nx">clientY</span><span class="p">,</span><span class="o">!</span><span class="mi">1</span><span class="p">,</span><span class="o">!</span><span class="mi">1</span><span class="p">,</span><span class="o">!</span><span class="mi">1</span><span class="p">,</span><span class="o">!</span><span class="mi">1</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="kc">null</span><span class="p">),</span><span class="nx">d</span><span class="p">.</span><span class="nx">simulated</span><span class="o">=!</span><span class="mi">0</span><span class="p">,</span><span class="nx">a</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">dispatchEvent</span><span class="p">(</span><span class="nx">d</span><span class="p">)}},</span><span class="nx">f</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="nb">Date</span><span class="p">.</span><span class="nx">now</span><span class="p">(),</span><span class="nx">d</span><span class="o">=</span><span class="nx">c</span><span class="o">-</span><span class="nx">a</span><span class="p">.</span><span class="nx">time</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">clientX</span><span class="p">,</span><span class="nx">f</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">clientY</span><span class="p">,</span><span class="nx">h</span><span class="o">=</span><span class="p">[</span><span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">x</span><span class="o">-</span><span class="nx">e</span><span class="p">),</span><span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">y</span><span class="o">-</span><span class="nx">f</span><span class="p">)],</span><span class="nx">i</span><span class="o">=</span><span class="nx">g</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">target</span><span class="p">,</span><span class="s2">&quot;A&quot;</span><span class="p">)</span><span class="o">||</span><span class="nx">b</span><span class="p">.</span><span class="nx">target</span><span class="p">,</span><span class="nx">j</span><span class="o">=</span><span class="nx">i</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">,</span><span class="nx">k</span><span class="o">=</span><span class="s2">&quot;A&quot;</span><span class="o">===</span><span class="nx">j</span><span class="p">,</span><span class="nx">l</span><span class="o">=</span><span class="nb">window</span><span class="p">.</span><span class="nx">navigator</span><span class="p">.</span><span class="nx">standalone</span><span class="o">&amp;&amp;</span><span class="nx">k</span><span class="o">&amp;&amp;</span><span class="nx">b</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;href&quot;</span><span class="p">);</span><span class="k">return</span> <span class="nx">a</span><span class="p">.</span><span class="nx">time</span><span class="o">=</span><span class="nx">c</span><span class="p">,</span><span class="nx">a</span><span class="p">.</span><span class="nx">x</span><span class="o">=</span><span class="nx">e</span><span class="p">,</span><span class="nx">a</span><span class="p">.</span><span class="nx">y</span><span class="o">=</span><span class="nx">f</span><span class="p">,(</span><span class="o">!</span><span class="nx">b</span><span class="p">.</span><span class="nx">simulated</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="mi">500</span><span class="o">&gt;</span><span class="nx">d</span><span class="o">||</span><span class="mi">1500</span><span class="o">&gt;</span><span class="nx">d</span><span class="o">&amp;&amp;</span><span class="mi">50</span><span class="o">&gt;</span><span class="nx">h</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">&amp;&amp;</span><span class="mi">50</span><span class="o">&gt;</span><span class="nx">h</span><span class="p">[</span><span class="mi">1</span><span class="p">])</span><span class="o">||</span><span class="nx">l</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">(),</span><span class="nx">b</span><span class="p">.</span><span class="nx">stopPropagation</span><span class="p">(),</span><span class="o">!</span><span class="nx">l</span><span class="p">)</span><span class="o">?!</span><span class="mi">1</span><span class="o">:</span><span class="p">(</span><span class="nx">l</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">location</span><span class="o">=</span><span class="nx">i</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;href&quot;</span><span class="p">)),</span><span class="nx">i</span><span class="o">&amp;&amp;</span><span class="nx">i</span><span class="p">.</span><span class="nx">classList</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">i</span><span class="p">.</span><span class="nx">classList</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="s2">&quot;energize-focus&quot;</span><span class="p">),</span><span class="nb">window</span><span class="p">.</span><span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span><span class="nx">i</span><span class="p">.</span><span class="nx">classList</span><span class="p">.</span><span class="nx">remove</span><span class="p">(</span><span class="s2">&quot;energize-focus&quot;</span><span class="p">)},</span><span class="mi">150</span><span class="p">)),</span><span class="k">void</span> <span class="mi">0</span><span class="p">)},</span><span class="nx">g</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="nx">a</span><span class="p">;</span><span class="nx">c</span><span class="o">!==</span><span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">;){</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">c</span><span class="o">||</span><span class="nx">c</span><span class="p">.</span><span class="nx">nodeName</span><span class="o">===</span><span class="nx">b</span><span class="p">)</span><span class="k">return</span> <span class="nx">c</span><span class="p">;</span><span class="nx">c</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">}</span><span class="k">return</span> <span class="kc">null</span><span class="p">},</span><span class="nb">document</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;touchstart&quot;</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="o">!</span><span class="mi">1</span><span class="p">),</span><span class="nb">document</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;touchmove&quot;</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="o">!</span><span class="mi">1</span><span class="p">),</span><span class="nb">document</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;touchend&quot;</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="o">!</span><span class="mi">1</span><span class="p">),</span><span class="nb">document</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;click&quot;</span><span class="p">,</span><span class="nx">f</span><span class="p">,</span><span class="o">!</span><span class="mi">0</span><span class="p">)}})();</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.05471s from github-fe132-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/davidcalhoun/energize.js/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>


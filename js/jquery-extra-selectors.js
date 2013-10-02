


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>JQuery-Extended-Selectors/jquery-extra-selectors.js at master · keithclark/JQuery-Extended-Selectors · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="fe2.rs.github.com">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="xhr-socket" href="/_sockets" />
    
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="Ld7CG3RYUOLKbUzgZhOq13dS/hDBkjozwJluH0GFUVo=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-c6ca95663cba6496fe7a5bdd98671b82cd956df3.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-d35b02ba3940bde9b9f2c3e58f2dfb1ceff5886c.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://github.global.ssl.fastly.net/assets/frameworks-eae23340ab2a6ba722166712e699c87aaf60ad8f.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-9339835a99ecd32fb1a6de9d7d9bf56f272a0b39.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="7bb0bd2d60adf37e0211fafb1d0d1ba9">

        <link data-pjax-transient rel='permalink' href='/keithclark/JQuery-Extended-Selectors/blob/48f169fd34834eb41a1061239f123af9ce71e249/jquery-extra-selectors.js'>
  <meta property="og:title" content="JQuery-Extended-Selectors"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/keithclark/JQuery-Extended-Selectors"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="JQuery-Extended-Selectors - Extends jQuery to add support for CSS3 xxx-of-type selectors"/>

  <meta name="description" content="JQuery-Extended-Selectors - Extends jQuery to add support for CSS3 xxx-of-type selectors" />

  <meta content="588665" name="octolytics-dimension-user_id" /><meta content="keithclark" name="octolytics-dimension-user_login" /><meta content="1509269" name="octolytics-dimension-repository_id" /><meta content="keithclark/JQuery-Extended-Selectors" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1509269" name="octolytics-dimension-repository_network_root_id" /><meta content="keithclark/JQuery-Extended-Selectors" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/keithclark/JQuery-Extended-Selectors/commits/master.atom" rel="alternate" title="Recent Commits to JQuery-Extended-Selectors:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob macintosh vis-public env-production ">

    <div class="wrapper">
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/signup">Sign up</a>
      <a class="button" href="/login?return_to=%2Fkeithclark%2FJQuery-Extended-Selectors%2Fblob%2Fmaster%2Fjquery-extra-selectors.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">


      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="keithclark/JQuery-Extended-Selectors"
      data-branch="master"
      data-sha="5e7d43251562acbbf1f74960a12d52830897f09f"
  >

    <input type="hidden" name="nwo" value="keithclark/JQuery-Extended-Selectors" />

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

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>


      


          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
  <a href="/login?return_to=%2Fkeithclark%2FJQuery-Extended-Selectors"
  class="minibutton with-count js-toggler-target star-button entice tooltipped upwards "
  title="You must be signed in to use this feature" rel="nofollow">
  <span class="octicon octicon-star"></span>Star
</a>
<a class="social-count js-social-count" href="/keithclark/JQuery-Extended-Selectors/stargazers">
  109
</a>

  </li>

    <li>
      <a href="/login?return_to=%2Fkeithclark%2FJQuery-Extended-Selectors"
        class="minibutton with-count js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/keithclark/JQuery-Extended-Selectors/network" class="social-count">
        13
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/keithclark" class="url fn" itemprop="url" rel="author"><span itemprop="title">keithclark</span></a></span
          ><span class="repohead-name-divider">/</span><strong
          ><a href="/keithclark/JQuery-Extended-Selectors" class="js-current-repository js-repo-home-link">JQuery-Extended-Selectors</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container ">

        <div class="repository-sidebar">
            

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/keithclark/JQuery-Extended-Selectors" aria-label="Code" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /keithclark/JQuery-Extended-Selectors">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/keithclark/JQuery-Extended-Selectors/issues" aria-label="Issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /keithclark/JQuery-Extended-Selectors/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>1</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/keithclark/JQuery-Extended-Selectors/pulls" aria-label="Pull Requests" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /keithclark/JQuery-Extended-Selectors/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>1</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/keithclark/JQuery-Extended-Selectors/pulse" aria-label="Pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /keithclark/JQuery-Extended-Selectors/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/keithclark/JQuery-Extended-Selectors/graphs" aria-label="Graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /keithclark/JQuery-Extended-Selectors/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/keithclark/JQuery-Extended-Selectors/network" aria-label="Network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /keithclark/JQuery-Extended-Selectors/network">
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

  <input type="text" class="clone js-url-field"
         value="https://github.com/keithclark/JQuery-Extended-Selectors.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/keithclark/JQuery-Extended-Selectors.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/keithclark/JQuery-Extended-Selectors" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/keithclark/JQuery-Extended-Selectors" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>



<p class="clone-options">You can clone with
    <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
    <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>,
  and <a href="https://help.github.com/articles/which-remote-url-should-i-use">other methods.</a>
</p>

  <a href="http://mac.github.com" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/keithclark/JQuery-Extended-Selectors/archive/master.zip"
                   class="minibutton sidebar-button"
                   title="Download this repository as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:17c1ea70be15eff9f0a82eebea60d591 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:17c1ea70be15eff9f0a82eebea60d591 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/keithclark/JQuery-Extended-Selectors/find/master" data-pjax data-hotkey="t" style="display:none">Show File Finder</a>

<div class="file-navigation">
  


<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master">
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
          <input type="text" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
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
              <a href="/keithclark/JQuery-Extended-Selectors/blob/master/jquery-extra-selectors.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" data-skip-pjax="true" rel="nofollow" title="master">master</a>
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
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/keithclark/JQuery-Extended-Selectors" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">JQuery-Extended-Selectors</span></a></span></span><span class="separator"> / </span><strong class="final-path">jquery-extra-selectors.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="jquery-extra-selectors.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/c5d5b24558f95d0e41897faccdde905f?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/keithclark" rel="author">keithclark</a></span>
    <time class="js-relative-date" datetime="2011-04-23T03:15:26-07:00" title="2011-04-23 03:15:26">April 23, 2011</time>
    <div class="commit-title">
        <a href="/keithclark/JQuery-Extended-Selectors/commit/fb8977e81a4dd90cca7d79dd75238dc2b9a1d907" class="message" data-pjax="true" title="Incorrect nodes were selected when loop value (A)(implied &#39;1&#39;) was omitt...

...ed in -of-type(An+B) (i.e n+7 or -n+7). Tidied nth-of-type params.">Incorrect nodes were selected when loop value (A)(implied '1') was om…</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/c5d5b24558f95d0e41897faccdde905f?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/keithclark">keithclark</a>
        </li>
      </ul>
    </div>
  </div>


<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">executable file</span>
          <span>56 lines (52 sloc)</span>
        <span>1.521 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
              <a class="minibutton js-entice" href=""
                 data-entice="You must be signed in to make or propose changes">Edit</a>
          <a href="/keithclark/JQuery-Extended-Selectors/raw/master/jquery-extra-selectors.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/keithclark/JQuery-Extended-Selectors/blame/master/jquery-extra-selectors.js" class="button minibutton ">Blame</a>
          <a href="/keithclark/JQuery-Extended-Selectors/commits/master/jquery-extra-selectors.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
            <a class="minibutton danger empty-icon js-entice" href=""
               data-entice="You must be signed in and on a branch to make or propose changes">
            Delete
          </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*</span></div><div class='line' id='LC2'><span class="cm"> * jQuery Extra Selectors - (c) Keith Clark freely distributable under the terms of the MIT license.</span></div><div class='line' id='LC3'><span class="cm"> * </span></div><div class='line' id='LC4'><span class="cm"> * twitter.com/keithclarkcouk</span></div><div class='line' id='LC5'><span class="cm"> * www.keithclark.co.uk</span></div><div class='line' id='LC6'><span class="cm"> */</span></div><div class='line' id='LC7'><br/></div><div class='line' id='LC8'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC9'>	<span class="kd">function</span> <span class="nx">getNthIndex</span><span class="p">(</span><span class="nx">cur</span><span class="p">,</span> <span class="nx">dir</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC10'>		<span class="kd">var</span> <span class="nx">t</span> <span class="o">=</span> <span class="nx">cur</span><span class="p">,</span> <span class="nx">idx</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC11'>		<span class="k">while</span> <span class="p">(</span><span class="nx">cur</span> <span class="o">=</span> <span class="nx">cur</span><span class="p">[</span><span class="nx">dir</span><span class="p">]</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC12'>			<span class="k">if</span> <span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">tagName</span> <span class="o">==</span> <span class="nx">cur</span><span class="p">.</span><span class="nx">tagName</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC13'>				<span class="nx">idx</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC14'>			<span class="p">}</span></div><div class='line' id='LC15'>		<span class="p">}</span></div><div class='line' id='LC16'>		<span class="k">return</span> <span class="nx">idx</span><span class="p">;</span></div><div class='line' id='LC17'>	<span class="p">}</span></div><div class='line' id='LC18'><br/></div><div class='line' id='LC19'>	<span class="kd">function</span> <span class="nx">isNthOf</span><span class="p">(</span><span class="nx">elm</span><span class="p">,</span> <span class="nx">pattern</span><span class="p">,</span> <span class="nx">dir</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC20'>		<span class="kd">var</span> <span class="nx">position</span> <span class="o">=</span> <span class="nx">getNthIndex</span><span class="p">(</span><span class="nx">elm</span><span class="p">,</span> <span class="nx">dir</span><span class="p">),</span> <span class="nx">loop</span><span class="p">;</span></div><div class='line' id='LC21'>		<span class="k">if</span> <span class="p">(</span><span class="nx">pattern</span> <span class="o">==</span> <span class="s2">&quot;odd&quot;</span> <span class="o">||</span> <span class="nx">pattern</span> <span class="o">==</span> <span class="s2">&quot;even&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC22'>			<span class="nx">loop</span> <span class="o">=</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC23'>			<span class="nx">position</span> <span class="o">-=</span> <span class="o">!</span><span class="p">(</span><span class="nx">pattern</span> <span class="o">==</span> <span class="s2">&quot;odd&quot;</span><span class="p">);</span></div><div class='line' id='LC24'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC25'>			<span class="kd">var</span> <span class="nx">nth</span> <span class="o">=</span> <span class="nx">pattern</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;n&quot;</span><span class="p">);</span></div><div class='line' id='LC26'>			<span class="k">if</span> <span class="p">(</span><span class="nx">nth</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC27'>				<span class="nx">loop</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">pattern</span><span class="p">,</span> <span class="mi">10</span><span class="p">)</span> <span class="o">||</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">pattern</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">nth</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;1&quot;</span><span class="p">,</span> <span class="mi">10</span><span class="p">);</span></div><div class='line' id='LC28'>				<span class="nx">position</span> <span class="o">-=</span> <span class="p">(</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">pattern</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">nth</span> <span class="o">+</span> <span class="mi">1</span><span class="p">),</span> <span class="mi">10</span><span class="p">)</span> <span class="o">||</span> <span class="mi">0</span><span class="p">)</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC29'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC30'>				<span class="nx">loop</span> <span class="o">=</span> <span class="nx">position</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC31'>				<span class="nx">position</span> <span class="o">-=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">pattern</span><span class="p">,</span> <span class="mi">10</span><span class="p">)</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC32'>			<span class="p">}</span></div><div class='line' id='LC33'>		<span class="p">}</span></div><div class='line' id='LC34'>		<span class="k">return</span> <span class="p">(</span><span class="nx">loop</span><span class="o">&lt;</span><span class="mi">0</span> <span class="o">?</span> <span class="nx">position</span><span class="o">&lt;=</span><span class="mi">0</span> <span class="o">:</span> <span class="nx">position</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">position</span> <span class="o">%</span> <span class="nx">loop</span> <span class="o">==</span> <span class="mi">0</span></div><div class='line' id='LC35'>	<span class="p">}</span></div><div class='line' id='LC36'><br/></div><div class='line' id='LC37'>	<span class="kd">var</span> <span class="nx">pseudos</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC38'>		<span class="s2">&quot;first-of-type&quot;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">elm</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC39'>			<span class="k">return</span> <span class="nx">getNthIndex</span><span class="p">(</span><span class="nx">elm</span><span class="p">,</span> <span class="s2">&quot;previousSibling&quot;</span><span class="p">)</span> <span class="o">==</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC40'>		<span class="p">},</span></div><div class='line' id='LC41'>		<span class="s2">&quot;last-of-type&quot;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">elm</span><span class="p">)</span> <span class="p">{</span> </div><div class='line' id='LC42'>			<span class="k">return</span> <span class="nx">getNthIndex</span><span class="p">(</span><span class="nx">elm</span><span class="p">,</span> <span class="s2">&quot;nextSibling&quot;</span><span class="p">)</span> <span class="o">==</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC43'>		<span class="p">},</span></div><div class='line' id='LC44'>		<span class="s2">&quot;only-of-type&quot;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">elm</span><span class="p">)</span> <span class="p">{</span> </div><div class='line' id='LC45'>			<span class="k">return</span> <span class="nx">pseudos</span><span class="p">[</span><span class="s2">&quot;first-of-type&quot;</span><span class="p">](</span><span class="nx">elm</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">pseudos</span><span class="p">[</span><span class="s2">&quot;last-of-type&quot;</span><span class="p">](</span><span class="nx">elm</span><span class="p">);</span></div><div class='line' id='LC46'>		<span class="p">},</span></div><div class='line' id='LC47'>		<span class="s2">&quot;nth-of-type&quot;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">elm</span><span class="p">,</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">match</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC48'>			<span class="k">return</span> <span class="nx">isNthOf</span><span class="p">(</span><span class="nx">elm</span><span class="p">,</span> <span class="nx">match</span><span class="p">[</span><span class="mi">3</span><span class="p">],</span> <span class="s2">&quot;previousSibling&quot;</span><span class="p">);</span></div><div class='line' id='LC49'>		<span class="p">},</span></div><div class='line' id='LC50'>		<span class="s2">&quot;nth-last-of-type&quot;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">elm</span><span class="p">,</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">match</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC51'>			<span class="k">return</span> <span class="nx">isNthOf</span><span class="p">(</span><span class="nx">elm</span><span class="p">,</span> <span class="nx">match</span><span class="p">[</span><span class="mi">3</span><span class="p">],</span> <span class="s2">&quot;nextSibling&quot;</span><span class="p">);</span></div><div class='line' id='LC52'>		<span class="p">}</span>		</div><div class='line' id='LC53'>	<span class="p">}</span></div><div class='line' id='LC54'>	<span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">expr</span><span class="p">[</span><span class="s1">&#39;:&#39;</span><span class="p">],</span> <span class="nx">pseudos</span><span class="p">);</span></div><div class='line' id='LC55'><span class="p">}(</span><span class="nx">jQuery</span><span class="p">));</span></div></pre></div>
          </td>
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
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.03983s from fe2.rs.github.com">GitHub</span>, Inc.</li>
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
                 data-url="/keithclark/JQuery-Extended-Selectors/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

    
  </body>
</html>


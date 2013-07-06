<?
namespace Destiny;
use Destiny\Utils\Date;
use Destiny\Utils\Http;
use Destiny\Utils\Tpl;
?>
<!DOCTYPE html>
<html>
<head>
<title><?=Tpl::title($model->title)?></title>
<meta charset="utf-8">
<meta name="description" content="<?=Config::$a['meta']['description']?>">
<meta name="keywords" content="<?=Config::$a['meta']['keywords']?>">
<meta name="author" content="<?=Config::$a['meta']['author']?>">
<?include'./tpl/seg/opengraph.php'?>
<?include'./tpl/seg/commontop.php'?>
<?include'./tpl/seg/google.tracker.php'?>
</head>
<body id="home">
	<?include'./tpl/seg/top.php'?>
	
	<?if((!isset($_COOKIE['alert-dismissed-chatalert']) || $_COOKIE['alert-dismissed-chatalert'] != true)):?>
	<div class="container">
		<div id="chatalert" class="alert alert-info" style="margin:10px 0 0 0;">
			<button type="button" class="close persist" data-dismiss="alert">&times;</button>
			<h4>New chat now available!</h4>
			<div><a href="/chat/faq">Chat FAQ</a> Please remember it is still in alpha. <a href="/chat">FOR MORE GIRTH CLICK HERE</a></div>
		</div>
	</div>
	<?php endif; ?>
	
	<?if(!Session::hasRole(\Destiny\UserRole::SUBSCRIBER) && (!isset($_COOKIE['alert-dismissed-subscription-cta']) || $_COOKIE['alert-dismissed-subscription-cta'] != true)):?>
	<div class="container">
		<div id="subscription-cta" class="alert alert-info" style="margin:10px 0 0 0;">
			<button type="button" class="close persist" data-dismiss="alert">&times;</button>
			<h4>Subscriptions now available!</h4>
			<?php if(Session::hasRole(\Destiny\UserRole::USER)): ?>
			<div><a href="/subscribe"><i class="icon-bobross" title="There are no limits here!"></i> Want to contribute?</a> Well now you can! Become the owner of your own Destiny subscription. <a target="_blank" href="http://www.reddit.com/r/Destiny/comments/1hn15x/new_subscription_system_launched/">Feedback and FAQ</a></div>
			<?php else: ?>
			<div><a href="/login"><i class="icon-bobross" title="There are no limits here!"></i> Want to contribute?</a> Well now you can! Create an account and become the owner of your own Destiny subscription. <a target="_blank" href="http://www.reddit.com/r/Destiny/comments/1hn15x/new_subscription_system_launched/">Feedback and FAQ</a></div>
			<?php endif; ?>
		</div>
	</div>
	<?php endif; ?>
	
	<?include'./tpl/seg/panel.twitch.php'?>
	<?include'./tpl/seg/panel.lol.php'?>
	<?include'./tpl/seg/panel.videos.php'?>
	<?include'./tpl/seg/panel.music.php'?>
	<?include'./tpl/seg/panel.calendar.php'?>
	<?include'./tpl/seg/panel.ads.php'?>
	<?include'./tpl/seg/foot.php'?>
	<?include'./tpl/seg/commonbottom.php'?>
</body>
</html>
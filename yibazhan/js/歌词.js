let player = new cplayer({
          element: document.getElementById('app'),
          zoomOutKana: true,
          dark: true,
          volume: 0.50,
          autoplay: true,
          playlist: [
            {
              src: 'http://music.163.com/song/media/outer/url?id=2093562354.mp3',
              poster: 'https://p1.music.126.net/2vTe0rWLeFRnMn58DdXOMA==/109951167360559260.jpg?param=300y300',
              name: '纸飞机.',
              artist: '林忆莲',
              lyric: "[00:00.866]last night, all I think about is you\n[00:03.799]don't stop, baby, you can walk through\n[00:06.732]don't want, baby, think about you\n[00:09.731]you know that I'm never gonna lose\n[00:15.230]光りだすロード、揺らいでくビジョン\n[00:18.229]熱波ゆらり、泳いでくミラー\n[00:21.296]光りだすロード、揺らいでくビジョン\n[00:24.162]熱波ゆらり、泳いでくミラー\n[00:27.361]思い浮かぶの君ばかり\n[00:30.360]初夏零時過ぎたばかり\n[00:33.526]ヒートウェイブに迷うのさ\n[00:36.359]君に幸せあげられない\n[00:39.359]思い浮かぶの君ばかり\n[00:42.191]初夏零時過ぎたばかり\n[00:45.257]ヒートウェイブに迷うのさ\n[00:48.157]君に幸せあげられない\n[00:51.156]テレビつけて消さないように\n[00:54.022]僕らのこと考えないように\n[01:57.122]今日のハリウッド映画放映\n[01:00.021]僕らのことまるで投影\n[01:03.020]幸せに君なるはず\n[01:05.920]僕じゃなきゃ可能なはず\n[01:08.919]路に広がる逃げ水\n[01:11.919]闇の中ではもう見えず\n[01:14.851]思い浮かぶの君ばかり\n[01:17.784]初夏零時過ぎたばかり\n[01:20.850]ヒートウェイブに迷うのさ\n[01:23.616]君に幸せあげられない\n[01:26.349]闘えす息できず\n[01:29.248]愛とか言っていたって\n[01:32.581]行くべきなのさ\n[01:35.581]ほかの誰かふさわしいよ\n[01:38.680]そりゃつらいけど\n[01:41.579]君もわかるはず\n[01:44.512]泣いてる君壊れそうだ\n[01:47.511]さよならにも一度だけ\n[01:50.344]思い浮かぶの君ばかり\n[01:53.344]初夏零時過ぎたばかり\n[01:56.410]ヒートウェイブに迷うのさ\n[02:59.242]君に幸せあげられない\n[02:02.242]思い浮かぶの君ばかり\n[02:05.175]初夏零時過ぎたばかり\n[02:08.241]ヒートウェイブに迷うのさ\n[02:11.007]君に幸せあげられない\n[02:14.073]君はどんな夢のなかに\n[02:17.006]満たされた笑み浮かべて\n[02:20.005]思い知る自分の無力\n[02:22.838]陰りない君の表情に\n[02:25.905]思い浮かぶの君ばかり\n[02:28.903]初夏零時過ぎたばかり\n[02:31.969]ヒートウェイブに迷うのさ\n[02:34.669]君に幸せあげられない\n[02:40.834]sometimes all I think about is you\n[02:43.700]late nights in the middle of June\n[02:46.766]heatwaves been fakin' me out\n[02:49.599]can't make you happier now\n[02:52.765]sometimes all I think about is you\n[02:55.531]late nights in the middle of June\n[03:58.664]heatwaves been fakin' me out\n[03:01.463]can't make you happier now\n[03:04.529]road shimmer\n[03:05.862]wiggling the vision\n[03:07.195]heat heat waves\n[03:08.195]I'm swimming in a mirror\n[03:10.528]road shimmer\n[03:11.695]wiggling the vision\n[03:13.194]heat heat waves\n[03:14.194]I'm swimming in a mirror"
            },
            {
              src: 'http://music.163.com/song/media/outer/url?id=229072.mp3',
              poster: 'https://p1.music.126.net/eF6W74HxjPxUwU51ohn60w==/109951168023389683.jpg?param=300y300',
              name: '避风港',
              artist: '冯曦妤',
              lyric: '[00:13.780]二人で出掛けるとき\n[00:16.180]俺のGIVENCHY　それとGALAXY\n[00:19.080]君が持って同じ歩幅　ポケットの中\n[00:23.340]手つないだら perfect\n[00:26.240]まだわかんないとこもあって\n[00:29.460]俺も全然子供だしね\n[00:32.600]喧嘩して嫌んなって\n[00:34.900]だけどbye-byeする気はないぜ\n[00:38.840]二人でいられるならbaby\n[00:41.840]世界中どこだって平気\n[00:44.880]俺が良いとき君が笑って\n[00:48.120]君が良いとき俺が笑って\n[00:51.200]今まで色んな人と会って\n[00:54.280]自分がどういう男かって\n[00:57.380]本当の意味で理解させてくれた子はいない\n[01:01.760]君以外\n[01:03.180]My Boo　どこへも行かないで\n[01:07.740]誰にも触れないで\n[01:10.940]俺がいるから　隣いるから\n[01:15.600]なぁ、Boo I’m so happy\n[01:18.540]俺がアラジンなら君はジャスミン\n[01:21.620]照れくさくて　いつも言えないけどさ\n[01:26.520]愛してる\n[01:41.160]恋愛は算数じゃない\n[01:43.980]大事なのはバランスじゃない？\n[01:47.180]俺が君を守ってるようで\n[01:49.880]時に君が俺を守ってる\n[01:53.040]It’s easy\n[01:54.920]君と過ごす日々\n[01:58.120]意味もなく塞いでた俺にとって\n[02:01.160]君の笑顔が全てを開くKeyに\n[02:05.720]常識や本能、お金も欲も\n[02:09.020]やんなきゃいけない事や仕事も\n[02:12.140]全部全部、来週へ\n[02:14.880]この週末は、君が最優先\n[02:18.260]勿論、良いことだけじゃない\n[02:21.020]俺達、誰かが描いた絵じゃない\n[02:24.140]トラブったって冷静に対応\n[02:27.660]one for da honey , two for my all\n[02:30.440]My Boo　どこへも行かないで\n[02:34.960]誰にも触れないで\n[02:38.160]俺がいるから　隣いるから\n[02:42.900]なぁ、Boo I’m so happy\n[02:45.920]俺がアラジンなら君はジャスミン\n[02:48.980]照れくさくて　いつも言えないけどさ\n[02:53.720]愛してる\n[02:56.800]君を愛しすぎて\n[03:00.020]たまに超不安で\n[03:03.060]病んでテンパって\n[03:04.600]君もそんな俺見て苦しんでる\n[03:09.260]それでも好きなんだ\n[03:12.480]不器用なだけなんだ\n[03:14.900]どんなに辛くても側にいたいよ\n[03:20.180]My Boo　何にも言わないで\n[03:24.920]帰ったらハグして\n[03:28.120]君がいるなら　俺、頑張るから\n[03:32.700]なぁ、Boo I’m so happy\n[03:35.560]俺と出逢ってくれてありがとう\n[03:38.900]眠ってる時スネてる時笑ってる時\n[03:42.860]全部、愛してるよ\n[03:45.240]My Boo　どこへも行かないで\n[03:49.760]誰にも触れないで\n[03:53.040]俺がいるから　隣いるから\n[03:57.660]なぁ、Boo I’m so happy\n[04:00.620]俺がアラジンなら君はジャスミン\n[04:03.740]照れくさくて　いつも言えないけどさ\n[04:08.640]愛してる'
            },
            {
              src: 'https://music.163.com/song/media/outer/url?id=86369.mp3',
              poster: 'https://p4.music.126.net/tdBhA4_YvSfaJBfBUtJAFQ==/109951167870491074.jpg?param=300y300',
              name: '偏爱',
              artist: '张京芸',
              lyric: '[00:00.959]iPhoneのパスワードは最近変えたのは\n[00:06.963]何でだろうね何でだろうね不思議だね\n[00:12.965]記念日でもないのになぜプレゼントなの？\n[00:18.708]何でだろうね何でだろうね不思議だね\n[00:25.221]誰その女？\n[00:26.954]AM3時\n[00:28.206]現行犯\n[00:31.459]ハサミガール髪をチョキチョキチョキ\n[00:34.218]未練がある君をチョキチョキチョキ\n[00:37.461]約束したでしょう？\n[00:39.967]２度目はも無理よ\n[00:43.474]強い子演じてみたけど\n[00:46.463]内心ちょっぴりshock shock shock\n[00:49.222]「死にたい」のはこっちよ\n[00:52.205]でも私がいないとダメな子\n[00:56.725]もうやめてね？\n[00:59.974]…許したげる\n[01:01.965]\n[01:13.211]iPhoneをお風呂場にも持っていくようになったね\n[01:19.209]何でだろうね何でだろうね不思議だね\n[01:25.211]最近よく飲みに行くね　お酒苦手でしょ？\n[01:30.968]何でだろうね何でだろうね不思議だね\n[01:37.204]またあの女？\n[01:38.715]AM6時\n[01:40.212]朝帰り\n[01:43.463]\n[01:43.978]ハサミガール髪も伸ぴてきて\n[01:46.459]やり直せた思ってたのに\n[01:49.455]やくそくしたでしょ？\n[01:51.963]３度目とか論外\n[01:55.456]弱い子演じてみたけど\n[01:58.219]無意味な時間がtick tack tack\n[02:01.459]「泣きたい」のはこっちよ\n[02:04.209]でも私がいないとダメな子\n[02:08.715]もうやめてね？\n[02:12.959]…許したげる\n[02:16.713]\n[02:37.472]惚れた私がバカだった\n[02:40.217]\n[02:40.710]ハサミガール髪をチョキチョキチョキ\n[02:43.464]未練がある君をチョキチョキチョキ\n[02:46.462]情で許すとか\n[02:49.223]そんなのくそくらえ\n[02:52.475]強い子演じてみたけど\n[02:55.217]内心ちょっぴりshock shock shock\n[02:58.464]「死にたい」のはこっちよ\n[03:01.217]もう連絡しないわさよなる\n[03:05.965]縁切りましょ\n[03:08.714]\n[03:08.965]チョキチョキチョキ\n[03:13.222]\n[03:22.472]ハサミガール髪をチョキチョキチョキ\n[03:28.453]未練もないきみをチョキチョキチョキ'
            },
            {
              src: 'https://music.163.com/song/media/outer/url?id=1903149553.mp3',
              poster: 'https://p3.music.126.net/W35p4QxHFsDoQJSH45Lrjg==/109951168153944857.jpg?param=300y300',
              name: '无名的人',
              artist: '毛不易',
              lyric: '[00:01.934]幽霊屋敷の窓からひとつ\n[00:05.365]知らない誰かの声がする\n[00:09.088]「眼を向けたら戻れはしない」\n[00:12.809]お筆のせんせが言っていた\n[00:16.244]はじめはなんだかわからなかった\n[00:19.969]もやもやがかったお友達\n[00:23.687]一人でいるのを赦してくれた\n[00:27.121]静かな交差点\n[00:29.704]\n[00:29.993]青空は深い青　到底ここらで買える絵の具じゃ\n[00:37.433]描ききるったって無理だよ　だからみんな空を見てる\n[00:44.032]\n[00:44.606]黒か白か問われないこと\n[00:48.039]それがなんだか心地良かった\n[00:52.327]君の顔も(るるるる)君の声も\n[00:56.054]霞がついてくる\n[00:59.784]\n[01:28.994]行雲淑女の秘密を隠せ\n[01:32.723]非のあるところに煙あり\n[01:36.452]「あなたにどこかで触れた気がする」\n[01:39.883]輪廻のおままごと\n[01:42.177]\n[01:42.751]それもそうかこの街じゃ　今更人で居ようとするのも\n[01:50.173]馬鹿みたいだって思うんだよ　だから僕は君を見てる\n[01:56.755]\n[01:57.330]黒と黒が混ざり合うこと\n[02:00.769]それは大概意味がなかった\n[02:05.058]好きなとこも(るるるる)それ以外も\n[02:08.776]同じになったから\n[02:12.504]\n[02:33.986]春風のうららに満ちて　この街の霞が消えてしまったら\n[02:42.288]また逃げてしまおう　その時選ぶのは\n[02:47.726]\n[02:48.013]どんな色かわからないけど\n[02:51.739]受け入れてあげられるように\n[02:55.170]僕たちは旅をしている\n[02:59.751]顔を隠したまま\n[03:06.909]霞がついてくる'
            },
            {
              src: 'https://music.163.com/song/media/outer/url?id=573968836.mp3',
              poster: 'https://p4.music.126.net/JaE9FykaLU8dRSbNlucbZg==/109951163538935511.jpg?param=300y300',
              name: '春泥',
              artist: '庾澄庆',
              lyric: '[00:13.675]風鈴の音てﾞ　瞼をこすった \n[00:20.166]さいこﾞの季節　後悔しないてﾞ\n[00:27.051]アイスかﾞ溶ける 雫かﾞ落ちる\n[00:32.439]タワーの上 ゆれるオーロラ 夏かﾞやってくる\n[00:40.916]\n[00:51.789]何する？スイカ割りは\n[00:55.023]平凡たﾞって トﾞキトﾞキする　　　　　　　\n[00:58.328]飛ひﾞ込め 海の色を変えろ\n[01:01.653]忘れたくない青になる\n[01:05.123]そうたﾞ ラムネの味　\n[01:08.076]難解なんたﾞ 生きてくように\n[01:11.450]ふたりはすﾞっと一緒たﾞったのに\n[01:14.719]泣くな、あたしの夏空\n[01:18.889]\n[01:21.024]浴衣の足を カランと鳴らした\n[01:28.226]君の欠伸かﾞ 聞こえた気かﾞした\n[01:35.183]煙の匂い 振り向いた夜空\n[01:40.582]高く 高く登った音 花火かﾞひらいた\n[01:49.323]\n[01:59.894]見ててね 金魚すくい\n[02:03.159]簡単たﾞって言わないてﾞね\n[02:06.471]肝試しはコワイものはﾞかり\n[02:09.688]いやいや、君のコトしﾞゃない\n[02:13.252]なんて、伝わらない\n[02:16.149]探してたって いるわけない\n[02:19.587]ひとりは慣れてたはすﾞなのに\n[02:22.802]泣くな、あたしの夏空\n[02:25.792]永遠のしあわせなら\n[02:29.101]単純なんたﾞ　魅せてあけﾞる\n[02:32.403]わたあめ雲かき分けた先\n[02:35.799]夏はとﾞこかてﾞ待っている\n[02:39.211]せーのてﾞ、追いかけっこ\n[02:42.038]ケﾞームオーハﾞーたﾞ このセカイは\n[02:45.511]飛ひﾞ込め 海の色を変えろ\n[02:48.720]泣くな、あたしの夏空\n[02:52.656]'
            },
          ]
        })
        function playMusic() {
            player.play()
            document.removeEventListener('click', playMusic);
        }
        // document.addEventListener('click', playMusic);

$(function () {
    var data = [
        {
            title: '个人报表个人报表个人报表个人报表个人报表个人报表个人报表个人报表个人报表个人报表个人报表个人报表个人报表个人报表个人报表',
            name: '张三',
            state: '执行中',
            options: [
                {
                    title: '个人报表-文档一',
                    name: '张三-1',
                    state: '执行中',
                    options: [{ title: '个人报表-文档一-文档1', name: '张三-1-1', state: '执行中', 
                            options: [{ title: '个人报表-文档一-文档1-1', name: '张三-1-1-1', state: '执行中'}] 
                    },
                    { title: '个人报表-文档一-文档2', name: '张三-1-2', state: '执行中',
                    options: [{ title: '个人报表-文档一-文档1', name: '张三-1-1', state: '执行中', 
                    options: [{ title: '个人报表-文档一-文档1-1', name: '张三-1-1-1', state: '执行中'}] 
                    }]},
                    { title: '个人报表-文档一-文档3', name: '张三-1-3', state: '执行中' }
                    ]
                },
                { title: '个人报表-文档二', isOk: 'done', name: '张三-2', state: '已完成' },
            ]
        },
        {
            title: '个人收藏',
            isOk: 'done',
            name: '李四',
            state: '已完成',
            options: [
                {
                    title: '个人收藏-文档一',
                    name: '李四-1',
                    isOk: 'done',
                    state: '执行中',
                    
                },
                { title: '个人收藏-文档二', isOk: 'done', name: '李四-2', state: '已完成',options: [{ title: '个人收藏-文档一-文档1', name: '李四-1-1', state: '执行中', }] }
            ]
        },{
            title: '个人收藏',
            isOk: 'done',
            name: '王五',
            state: '已完成',
        }
    ];
    function tree(obj, className = 'menu') {
        let str = `<ul class='${className}'>`;
        $.each(obj, function (index, item) {
            str += `<li class='${(item.options && item.options.length) && 'fold' || ''}'>
                <a href="javascript:;" class='clearfix ${item.isOk === 'done' ? 'done' : ''}'>
                    <i></i>
                    <span class="hr"></span>
                    <div class='content ellipsis'>${item.title}</div>
                    <div class='by-result'><span>${item.name}</span><span>${item.state}</span></div>
            </a>`;
            (item.options && item.options.length) && (str += tree(item.options, 'submenu'));
            str += `</li>`;
        });
        str += '</ul>';
        return str;
    };
    $('.tree').html(tree(data));
    $('.menu>li').each(function(){
        ($(this).has(".submenu").length>0) && $(this).find('a:first').addClass('is-expand');
        $(this).find('.submenu:not(:first)').css('display','none');
    });
    $('.tree').on('click', 'i', function(e) {
      $(this).parent().toggleClass('is-expand').next().slideToggle();
      $(this).parent().parent().toggleClass('expand');
    });
});
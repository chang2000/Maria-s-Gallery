import React, { useState, useEffect } from 'react'
import './Book.css'
import BookItem from '../components/BookItem/BookItem'

const Book = () => {

    const bookImgArr = ['ouwei', 'shiming', 'teliduxing', 'tamen']
    const imgs = bookImgArr.map(item => require('../assets/book-covers/' + item + '.jpg'))
    const bookInfo = [
        {
            coverURL: imgs[0],
            name: '一个叫欧维的男人决定去死',
            author: '弗雷德里克 · 巴克曼',
            comment: '欧维，这个坏脾气的老头，并没有死成\n欲扬先抑的温情故事'
        },
        {
            coverURL: imgs[1],
            name: '失明症漫记',
            author: '若泽 · 萨拉马戈',
            comment: '蔓延全球的传染病：失明症\n在隔离中发生的剧情令人深思'
        },
        {
            coverURL: imgs[2],
            name: '一直特立独行的猪',
            author: '王小波',
            comment: '戏谑、有趣、深刻\n这本书让我爱上王小波'
        },
        {
            coverURL: imgs[3],
            name: '她們，和她們的希望故事',
            author: '紀思道，伍潔芳',
            comment: '震撼人心\n其中的片段令人几度落泪'
        },
    ]


    return (
        <div className='book'>
            <div className='book-text'>
                Books
            </div>

            <div className='book-items-grid'>
                {
                    bookInfo.map((info, key) => (
                        <BookItem
                            key={key}
                            coverURL={info.coverURL}
                            name={info.name}
                            author={info.author}
                            comment={info.comment} />
                    ))}
            </div>

        </div>
    )
}

export default Book
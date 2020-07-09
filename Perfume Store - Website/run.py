#!/usr/bin/python
# -*- coding: utf-8 -*-
from flask import Flask
from flask import jsonify
from flask import request
from io import open
import json

app = Flask(__name__, static_folder='www')

@app.route('/<path:path>')
def static_file(path):
    try:
        return app.send_static_file(path)
    except:
        return "Error"

@app.route('/favorit', methods=['POST'])
def set_favorit():
    # search = request.args.get("search")
    # page = request.args.get("page")
    # email = request.form.get('email')
    # password = request.form.get('password')
    data = request.data
    movie = json.loads(data)
    print(movie['imdb_id'], movie['title'])
    rez = {'rez': "ok"}
    return jsonify(rez)

@app.route('/filmovi', methods=['GET'])
def get_films():
    f = open("movies_1k.csv","r", encoding="utf8")
    mList = []
    for line in f:
        #http://image.tmdb.org/t/p/w500/wNUDAq5OUMOtxMlz64YaCp7gZma.jpg
        # 0 adult
        # 1 belongs_to_collection
        # 2 budget
        # 3 genres
        # 4 homepage
        # 5 id
        # 6 imdb_id
        # 7 original_language
        # 8 original_title
        # 9 overview
        # 10 popularity
        # 11 poster_path
        # 12 production_companies
        # 13 production_countries
        # 14 release_date
        # 15 revenue
        # 16 runtime
        # 17 spoken_languages
        # 18 status
        # 19 tagline
        # 20 title
        # 21 video
        # 22 vote_average
        # 23 vote_count

        try:
            parts = line.split('\t')
            popularity = 0
            popularity = float(parts[10])
            movie = {
                'title': parts[8],
                'popularity': popularity,
                'poster_path': parts[11],
                'genres': parts[3],
                'imdb_id': parts[6]
            }
            mList.append(movie)
        except Exception as e:
            print(e) 
            pass
    mList = sorted(mList[1:], key=lambda k: k['popularity'], reverse=True)

    rez = {'filmovi':mList[:100]}
    return jsonify(rez)


@app.route('/')
def root():
    return app.send_static_file('index.html')

app.run(host='0.0.0.0', port=8080, debug=True, use_reloader=False)

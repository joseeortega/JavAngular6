import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

//Models
import { Song } from '../model/song';

//Services
import { SongService } from './../services/song.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SongService]
})
export class SearchComponent implements OnInit {

  //Properties
  allSongs: Song[];

  constructor(private router: Router,private songService: SongService) { }

  ngOnInit() {
    this.getAllSongs();
  }

  getAllSongs(){
    this.allSongs=[];

    this.songService.getAll().subscribe( messageJSON => {

      for (let song of messageJSON) {

        //Generate each song
        let newSong = new Song();

        newSong.setId(song['id']);
        newSong.setName(song['name']);

        this.allSongs.push(newSong);
      }

    },
    error => {
      //If an error occurred
      this.router.navigate(["/home"]);
    }
    );
  }

}

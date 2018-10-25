package com.addcode.company.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.addcode.company.demo.model.Song;
import com.addcode.company.demo.service.SongService;


@RestController
public class MainController {
	
	@Autowired
	private SongService songService;
	
	@GetMapping("/all")
	public List<Song> getAll() {
		return songService.getAllSongs();
	}
	
	@GetMapping("/hi")
	public String hello() {
		return "hola";
	}

}

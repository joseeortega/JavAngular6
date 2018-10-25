package com.addcode.company.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.addcode.company.demo.model.Song;
import com.addcode.company.demo.repository.SongJpaRepository;

@Service
public class SongService {
	
	private SongJpaRepository songRepository;
	
	@Autowired
	public SongService(SongJpaRepository songRepository) {
		this.songRepository= songRepository;
	}
	
	public List<Song> getAllSongs(){
		return songRepository.findAll();
	}
	
	//Custom queries

}

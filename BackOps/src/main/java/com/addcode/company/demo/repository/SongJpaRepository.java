package com.addcode.company.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.addcode.company.demo.model.Song;

@Repository("songRepository")
public interface SongJpaRepository extends JpaRepository<Song, Long>{
	List<Song> findAll();
}

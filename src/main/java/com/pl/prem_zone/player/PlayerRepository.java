package com.pl.prem_zone.player;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PlayerRepository extends JpaRepository<Player,String> {
    void deleteBYName(String playerName);
    Optional<Player> findByName(String name);

}

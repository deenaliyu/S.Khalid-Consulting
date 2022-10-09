-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 06, 2022 at 04:13 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `skhalid`
--

-- --------------------------------------------------------

--
-- Table structure for table `agent`
--

CREATE TABLE `agent` (
  `id` int(11) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `location` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `property_l`
--

CREATE TABLE `property_l` (
  `id` int(11) NOT NULL,
  `listing_type` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `gallery` longtext NOT NULL,
  `property_type` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `about` longtext NOT NULL,
  `location` varchar(255) NOT NULL,
  `land_size` varchar(255) NOT NULL,
  `bed_space` varchar(255) NOT NULL,
  `bathroom` varchar(255) NOT NULL,
  `availability` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `property_l`
--

INSERT INTO `property_l` (`id`, `listing_type`, `image`, `gallery`, `property_type`, `price`, `description`, `about`, `location`, `land_size`, `bed_space`, `bathroom`, `availability`) VALUES
(4, 'sale', 'house1.jpeg', 'h1g1.jpeg~h1g2.jpeg~h1g3.jpeg~h1g4.jpeg~h1g5.jpeg~h1g6.jpeg~h1g7.jpeg~h1g8.jpeg~h1g9.jpeg~h1g10.jpeg', 'Duplex', 'nil', 'Duplex and a penthouse', '', 'Niger Motors Limited, Fagge 700211, Kano.', '- sqrt', '6', '4', 'sale'),
(5, 'sale', 'house2.jpeg', 'h2g1.jpeg~h2g2.jpeg~h2g3.jpeg~h2g4.jpeg~h2g5.jpeg', 'Duplex', '280million', 'Duplex and a penthouse', '', 'Magaji rumfa Road, Nassarawa GRA, Kano.', '480 sqm', '4', '2', 'sale'),
(6, 'sale', 'house3.jpeg', 'h3g1.jpeg~h3g2.jpeg~h3g3.jpeg', 'Duplex', '135million', 'Duplex and a penthouse', '', 'Magaji rumfa Road, Nassarawa GRA, Kano.', '337 sqm', '6', '4', 'sale'),
(7, 'sale', 'house4.jpeg', 'h4g1.jpeg~h4g2.jpeg~h4g3.jpeg~h4g4.jpeg~h4g5.jpeg~h4g6.jpeg~h4g7.jpeg~h4g8.jpeg~h4g9.jpeg~h4g10.jpeg', 'Duplex', '180million', 'Detached duplex', '', 'Bompai', '337 sqm', '6', '4', 'sale'),
(8, 'rent', 'house5.jpeg', 'h5g1.jpeg~h5g2.jpeg~h5g3.jpeg~h5g4.jpeg', 'Duplex', '3 million', '4Bedroom Duplex', '', 'Badawa layout after crescent college', '- sqm', '4', '4', 'sale'),
(9, 'sale', 'house6.jpeg', 'h6g1.jpeg~h6g2.jpeg~h6g3.jpeg', 'Duplex', '170 million', 'A 12 units of 2bedroom flats at completion', '', 'Tal-Udu', '- sqm', '12 units of 2', '-', 'sale'),
(10, 'rent', 'house7.jpeg', 'h7g1.jpeg~h7g2.jpeg~h7g3.jpeg~h7g4.jpeg~h7g4.jpeg~h7g5.jpeg~h7g6.jpeg~h7g7.jpeg~h7g8.jpeg', 'Duplex', '8 million', 'Office space for rent', '1st & 2nd floor is 2m each<br>  Ground floor is 2.5m <br>Pent house is 1.5m Total = 8m', 'State road, Nassarawa GRA, Kano State.', '- sqm', '2', '-', 'sale'),
(12, 'rent', 'house8.jpeg', 'h8g1.jpeg~h8g2.jpeg~h8g3.jpeg~h8g4.jpeg~h8g5.jpeg', 'Duplex', '9 million', '5bedroom duplex', '', 'Life camp, Abuja ', '- sqm', '5', '-', 'sale'),
(13, 'sale', 'house9.jpeg', 'h9g1.jpeg~h9g2.jpeg', 'Flats', '120 million', '16 units of 3 bedroom', '', 'Maimuna link, Badawa layout, Kano State', '- sqm', '3', '4', 'sale');

-- --------------------------------------------------------

--
-- Table structure for table `property_mangers`
--

CREATE TABLE `property_mangers` (
  `id` int(11) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `designation` varchar(255) NOT NULL,
  `twitter` varchar(255) NOT NULL,
  `facebook` varchar(255) NOT NULL,
  `linkedin` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `agent`
--
ALTER TABLE `agent`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `property_l`
--
ALTER TABLE `property_l`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `property_mangers`
--
ALTER TABLE `property_mangers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `agent`
--
ALTER TABLE `agent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `property_l`
--
ALTER TABLE `property_l`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `property_mangers`
--
ALTER TABLE `property_mangers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

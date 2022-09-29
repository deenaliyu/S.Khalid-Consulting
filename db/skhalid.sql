-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 29, 2022 at 01:23 PM
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
  `property_type` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `land_size` varchar(255) NOT NULL,
  `bed_space` varchar(255) NOT NULL,
  `bathroom` varchar(255) NOT NULL,
  `availability` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `property_l`
--

INSERT INTO `property_l` (`id`, `listing_type`, `image`, `property_type`, `price`, `description`, `location`, `land_size`, `bed_space`, `bathroom`, `availability`) VALUES
(1, 'rent', 'IMG-20220926-WA0024.jpg', 'Duplex', '2000000', 'Golden Urban House For Sell', 'MM Way', '2sqrt', '3', '2', 'sale'),
(2, 'rent', 'IMG-20220926-WA0023.jpg', 'Duplex', '2000000', 'Golden Urban House For Sell', 'MM Way', '2sqrt', '3', '2', 'sold');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `property_mangers`
--
ALTER TABLE `property_mangers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

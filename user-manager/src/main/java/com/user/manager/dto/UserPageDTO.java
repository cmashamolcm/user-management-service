package com.user.manager.dto;

import java.util.List;

public class UserPageDTO<T> {
    private List<T> content;
    private long totalElements;
    private int currentPage;
    private int count;
    private int totalPages;

    public UserPageDTO(List<T> content, long totalElements, int currentPage, int count, int totalPages) {
        this.content = content;
        this.totalElements = totalElements;
        this.currentPage = currentPage;
        this.count = count;
        this.totalPages = totalPages;
    }

    public List<T> getContent() {
        return content;
    }

    public void setContent(List<T> content) {
        this.content = content;
    }

    public int getCurrentPage() {
        return currentPage;
    }

    public void setCurrentPage(int currentPage) {
        this.currentPage = currentPage;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public void setTotalPages(int totalPages) {
        this.totalPages = totalPages;
    }

    public long getTotalElements() {
        return totalElements;
    }

    public void setTotalElements(long totalElements) {
        this.totalElements = totalElements;
    }

    public int getTotalPages() {
        return totalPages;
    }

    public void setTotalItems(long totalElements) {
        this.totalElements = totalElements;
    }
}


"""移杆时原占位与新占位怎么落库。"""
from __future__ import annotations


def clear_source_before_fit() -> bool:
    return True


def keep_source_active_after_success() -> bool:
    return True


def commit_target_when_fit_fails() -> bool:
    return True
